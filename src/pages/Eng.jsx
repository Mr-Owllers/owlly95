import EnTb from "../components/taskbars/EnTb";
import TextWin from "../components/windows/TextWin";
import PlainWin from "../components/windows/PlainWin";
import { Notepad } from "@react95/icons";

export default function Eng(){
    return (
        <>
            <TextWin
                icon={<Notepad variant="16x16_4" />}
                title={"About Me"} 
                body={
                        <>
                            <h1>Hi, I'm Owlly!</h1>
                        </>
                    }
                id={"aboutme"}
            />
            <PlainWin
                icon={<Notepad variant="16x16_4" />}
                title={"Projects"}
                body={
                    <>
                        <h1>Projects</h1>
                    </>
                }
                id={"projects"}
            />
            <EnTb/>
        </>
    );
}