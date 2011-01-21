// Do some initial setup.
if (Drupal.jsEnabled) {
  $(document).ready(function() {
    // Uniquely identify the user;
    mpq.push(["identify", Drupal.settings.mixpanel.defaults.uid]);

    // Register properties about the user.
    mpq.push(["register", Drupal.settings.mixpanel.defaults]);
  });
}
