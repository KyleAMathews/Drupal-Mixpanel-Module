This is a somewhat experimental effort at the moment. I need to cleanup a few more things then I'll post it to Drupal.org.

If you'd like to use it realize there's a few assumptions I'm making that may or may not fit your use case.
1. I'm assuming you only want to track authenticated users. My sites don't really service anonymous users so I ignore them here. The decision as to which roles to track will be moved to the admin interface before this makes it to d.o.
2. All the events I'm tracking in mixpanel.js are specific to my product (Eduglu). I'll remove those before this get's posted to d.o.
