import List from "../components/List";
import TextInput from "../components/TextInput";
import Header from "../components/header";
import './AppPage.css'

export default function AppPage(){
    return (
        <>
            <div className="background-image"></div>
            <div className="container main">
                <Header />
                <TextInput />
                <List />
            </div>
        </>
    )
}