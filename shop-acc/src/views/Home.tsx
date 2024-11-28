import Banner from "../components/Banner";
import ItemService from "../components/ItemService";
import Title from "../components/Title";

export default function Home() {
    return(
        <>
            <Banner/>
            <Title title="DỊCH VỤ NỔI BẬT"/>
            <ItemService/>
            <Title title="DANH MỤC GAME"/>
            <ItemService/>
        </>
    )
}