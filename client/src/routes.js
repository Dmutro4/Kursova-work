import AuthPage from "./component/AuthPage";
import GroupsPage from "./component/GroupsPage";
import DutyPage from "./component/DutyPage";
import GroupPage from "./component/GroupPage";


export const mainRouter = [
    {
        path: "/login",
        Component: <AuthPage/>
    },
    {
        path: "/registration",
        Component: <AuthPage/>
    },
    {
        path: "/groups",
        Component: <GroupsPage/>
    },
    {
        path: "/groups/:id",
        Component: <GroupPage/>
    },
    {
        path: "/duty",
        Component: <DutyPage/>
    },
]