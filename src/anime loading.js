class AnimeLoading {
  constructor(targetElement, options = {}) {
    this.targetElement = targetElement;
    this.options = options;
  }

  show() {
    // Implement animation to show loading indicator
    anime({
      targets: this.targetElement,
      opacity: [0, 1],
      duration: 500,
      easing: 'easeInOutQuad',
      loop: true,
      direction: 'alternate',
      ...this.options,
    });
  }

  hide() {
    // Implement animation to hide loading indicator
    anime({
      targets: this.targetElement,
      opacity: 0,
      duration: 500,
      easing: 'easeInOutQuad',
      complete: () => {
        // Ensure the loading indicator is hidden
        this.targetElement.style.display = 'none';
      },
      ...this.options,
    });
  }
}

// Export the class for use in other modules
export default AnimeLoading;
