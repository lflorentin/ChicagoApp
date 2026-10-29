class AuthRouter:
    """
    A router to control all database operations on models in the
    auth and contenttypes applications.
    """
    route_app_labels = {'publicReportApp.models'}
    print(route_app_labels)
    print("BONJOUR")

    def db_for_read(self, model, **hints):
        """
        Attempts to read auth and contenttypes models go to auth_db.
        """
        print(self.route_app_labels)
        print(model._meta.app_label)
        print("BONJOUR")
        if model._meta.app_label in self.route_app_labels:
            print("YES THIS IS TRUE")
            return 'publicReport'
        return None
