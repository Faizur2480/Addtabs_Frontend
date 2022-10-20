import { Routes, Route } from "react-router-dom";
import AddQuest from "../Question/AddQuestService";

export default function CommonRouter(){
    return(

    <div>
        <Routes>
            <Route>
                path="/addQuestion"
                match element={<AddQuest />}
            </Route>
        </Routes>
    </div>

    );
}