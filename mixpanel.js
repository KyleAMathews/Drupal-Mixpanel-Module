if (Drupal.jsEnabled) {
  $(document).ready(function() {
    // How often do people click on the your-groups drop down?
    $("#your-groups").bind('click', function(event) {
      mpq.push(["track", "click-your-groups", {"uid": Drupal.settings.user.uid, "activePath": Drupal.settings.activePath, "cohort": Drupal.settings.user.cohort, "distinct_id": Drupal.settings.user.uid}]);
    });
    // How often do people click on the my-groups drop down?
    $("#session").bind('click', function(event) {
      mpq.push(["track", "click-session-dropdown", {"uid": Drupal.settings.user.uid, "activePath": Drupal.settings.activePath, "cohort": Drupal.settings.user.cohort, "distinct_id": Drupal.settings.user.uid}]);
    });
    // How often do people click "expand this post"?
    $(".activity-teaser-expand").bind('click', function(event) {
      mpq.push(["track", "click-expand-this-post", {"uid": Drupal.settings.user.uid, "cohort": Drupal.settings.user.cohort, "distinct_id": Drupal.settings.user.uid}]);
      return false;
    });
    // How often do people click on the group settings tab?
    $("#group-settings").bind('click', function(event) {
      mpq.push(["track", "click-group-settings", {"uid": Drupal.settings.user.uid, "cohort": Drupal.settings.user.cohort, "distinct_id": Drupal.settings.user.uid}]);
    });
  });
}
