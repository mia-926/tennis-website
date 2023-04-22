import { CCalendarPage } from "../calendar copy/CCalendarPage";
import { CalendarPage } from "./CalendarPage";


export const CalendarReturnPage = () => {
        if(window.innerWidth < 700){
            return(
            <CCalendarPage/>
            );
        }

        return (
            <CalendarPage/>
        );
    
}