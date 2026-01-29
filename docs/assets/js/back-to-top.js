/**
 * Back to Top Button
 *
 * Shows/hides button based on scroll position and handles smooth scroll to top.
 */

(function () {
	'use strict';

	const backToTopButton = document.getElementById('back-to-top');
	if (!backToTopButton) return;

	const scrollThreshold = 200; // Show button after scrolling 200px

	/**
	 * Show or hide the button based on scroll position
	 */
	function toggleButton() {
		const scrollY = window.scrollY || document.documentElement.scrollTop;

		if (scrollY > scrollThreshold) {
			backToTopButton.classList.add('visible');
		} else {
			backToTopButton.classList.remove('visible');
		}
	}

	/**
	 * Scroll to top smoothly
	 */
	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}

	// Event listeners
	backToTopButton.addEventListener('click', function (e) {
		e.preventDefault();
		scrollToTop();
	});

	// Show/hide on scroll
	window.addEventListener('scroll', toggleButton, { passive: true });

	// Check initial scroll position
	toggleButton();
})();
