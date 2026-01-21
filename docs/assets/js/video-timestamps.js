/**
 * Video Timestamp Navigation
 *
 * Handles clicking timestamp buttons to jump to specific moments in embedded videos.
 * Supports both YouTube and Vimeo players.
 *
 * Usage: Include this script in your layout or page template.
 * Timestamp buttons should have data-time attribute with format "MM:SS" or "HH:MM:SS"
 */

(function() {
	'use strict';

	/**
	 * Convert time string (MM:SS or HH:MM:SS) to seconds
	 * @param {string} timeStr - Time in format "MM:SS" or "HH:MM:SS"
	 * @returns {number} - Time in seconds
	 */
	function timeToSeconds(timeStr) {
		const parts = timeStr.split(':').map(Number);

		if (parts.length === 2) {
			// MM:SS format
			return parts[0] * 60 + parts[1];
		} else if (parts.length === 3) {
			// HH:MM:SS format
			return parts[0] * 3600 + parts[1] * 60 + parts[2];
		}

		// Fallback: assume it's already in seconds
		return Number(timeStr) || 0;
	}

	/**
	 * Get the iframe element for a video player
	 * @param {HTMLElement} videoPlayer - The video player container
	 * @returns {HTMLIFrameElement|null} - The iframe element
	 */
	function getVideoIframe(videoPlayer) {
		return videoPlayer.querySelector('iframe');
	}

	/**
	 * Get the platform (youtube or vimeo) from the iframe src
	 * @param {HTMLIFrameElement} iframe - The iframe element
	 * @returns {string|null} - 'youtube' or 'vimeo' or null
	 */
	function getPlatform(iframe) {
		if (!iframe || !iframe.src) return null;

		if (iframe.src.includes('youtube.com') || iframe.src.includes('youtube-nocookie.com')) {
			return 'youtube';
		} else if (iframe.src.includes('vimeo.com')) {
			return 'vimeo';
		}

		return null;
	}

	/**
	 * Jump to timestamp in YouTube video
	 * @param {HTMLIFrameElement} iframe - YouTube iframe
	 * @param {number} seconds - Time in seconds
	 */
	function jumpToYouTubeTime(iframe, seconds) {
		// YouTube API method: postMessage to iframe
		// Requires enablejsapi=1 in the embed URL
		if (iframe.contentWindow) {
			// Use postMessage API (requires enablejsapi=1)
			// First seek to the time
			iframe.contentWindow.postMessage(
				JSON.stringify({
					event: 'command',
					func: 'seekTo',
					args: [seconds, true]
				}),
				'*'
			);

			// Then play the video
			setTimeout(() => {
				iframe.contentWindow.postMessage(
					JSON.stringify({
						event: 'command',
						func: 'playVideo'
					}),
					'*'
				);
			}, 100);
		}
	}

	/**
	 * Jump to timestamp in Vimeo video
	 * @param {HTMLIFrameElement} iframe - Vimeo iframe
	 * @param {number} seconds - Time in seconds
	 */
	function jumpToVimeoTime(iframe, seconds) {
		// Vimeo API method: postMessage to iframe
		if (iframe.contentWindow) {
			iframe.contentWindow.postMessage(
				JSON.stringify({
					method: 'seekTo',
					value: seconds
				}),
				'*'
			);
		}
	}

	/**
	 * Handle timestamp button click
	 * @param {Event} event - Click event
	 */
	function handleTimestampClick(event) {
		event.preventDefault();

		const button = event.currentTarget;
		const timeStr = button.getAttribute('data-time');

		if (!timeStr) {
			console.warn('Timestamp button missing data-time attribute');
			return;
		}

		// Find the parent video player container
		const videoPlayer = button.closest('.video-player');
		if (!videoPlayer) {
			console.warn('Timestamp button not inside .video-player container');
			return;
		}

		// Get the iframe
		const iframe = getVideoIframe(videoPlayer);
		if (!iframe) {
			console.warn('No iframe found in video player');
			return;
		}

		// Determine platform
		const platform = getPlatform(iframe);
		if (!platform) {
			console.warn('Unknown video platform');
			return;
		}

		// Convert time to seconds
		const seconds = timeToSeconds(timeStr);

		// Jump to timestamp based on platform
		if (platform === 'youtube') {
			jumpToYouTubeTime(iframe, seconds);
		} else if (platform === 'vimeo') {
			jumpToVimeoTime(iframe, seconds);
		}

		// Visual feedback: highlight clicked button
		const allButtons = videoPlayer.querySelectorAll('.timestamp-btn');
		allButtons.forEach(btn => btn.classList.remove('active'));
		button.classList.add('active');

		// Remove active class after 2 seconds
		setTimeout(() => {
			button.classList.remove('active');
		}, 2000);
	}

	/**
	 * Initialize timestamp navigation
	 */
	function initTimestampNavigation() {
		// Find all timestamp buttons
		const timestampButtons = document.querySelectorAll('.timestamp-btn[data-time]');

		if (timestampButtons.length === 0) {
			return; // No timestamp buttons found
		}

		// Add click event listeners
		timestampButtons.forEach(button => {
			button.addEventListener('click', handleTimestampClick);

			// Add keyboard support (Enter and Space)
			button.addEventListener('keydown', (event) => {
				if (event.key === 'Enter' || event.key === ' ') {
					event.preventDefault();
					handleTimestampClick(event);
				}
			});
		});

		console.log(`Initialized timestamp navigation for ${timestampButtons.length} button(s)`);
	}

	/**
	 * Prevent YouTube from showing related videos when video ends
	 */
	function preventRelatedVideos() {
		const videoPlayers = document.querySelectorAll('.video-player');

		videoPlayers.forEach(videoPlayer => {
			const iframe = getVideoIframe(videoPlayer);
			if (!iframe) return;

			const platform = getPlatform(iframe);
			if (platform !== 'youtube') return;

			// Listen for messages from YouTube iframe
			window.addEventListener('message', function(event) {
				// Only process messages from YouTube
				if (!event.origin.includes('youtube.com') && !event.origin.includes('youtube-nocookie.com')) {
					return;
				}

				try {
					const data = JSON.parse(event.data);

					// When video ends, stop it immediately to prevent related videos
					if (data.event === 'onStateChange' && data.info === 0) {
						// State 0 = ended
						setTimeout(() => {
							if (iframe.contentWindow) {
								iframe.contentWindow.postMessage(
									JSON.stringify({
										event: 'command',
										func: 'stopVideo'
									}),
									'*'
								);
							}
						}, 100);
					}
				} catch (e) {
					// Ignore non-JSON messages
				}
			});
		});
	}

	// Initialize when DOM is ready
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', function() {
			initTimestampNavigation();
			preventRelatedVideos();
		});
	} else {
		// DOM already loaded
		initTimestampNavigation();
		preventRelatedVideos();
	}

})();
