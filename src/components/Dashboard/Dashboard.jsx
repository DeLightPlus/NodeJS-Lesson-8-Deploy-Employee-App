import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

const Dashboard = ({employees}) => 
{
    return (
        <div className="container"> 
            <Sidebar/>
            <MainContent employees={employees}/>
        </div> 

    );
}
 
export default Dashboard;