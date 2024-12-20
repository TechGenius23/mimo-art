import Allartandcraft from "./Allartandcraft";
import Artandcraftcategory from "./Artandcraftcategory";
import Banner from "./Banner";
import Craftitemsection from "./Craftitemsection";
import Review from "./Review";
import Upcoming from "./Upcoming";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Allartandcraft></Allartandcraft>
           <Artandcraftcategory></Artandcraftcategory>
           <Craftitemsection></Craftitemsection>
           <Review></Review>
           <Upcoming></Upcoming>

        </div>
    );
};

export default Home;