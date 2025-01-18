import AboutSco from "./AboutSco";
import DataMarketing from "./DataMarketing";
import FAQ from "./FAQ";
import ScoPackages from "./ScoPackages";
import SeoAnalytics from "./SeoAnalytics";
import ScoBannar from "./SeoBannar";
import SeoSolution from "./SolutionbySeo";

const ScoServicesPage = () => {
    return (
        <div>
           <ScoBannar />
           <AboutSco />
           <SeoSolution />
           <SeoAnalytics />
           <DataMarketing />
           <ScoPackages />
           <FAQ />
        </div>
    );
};

export default ScoServicesPage;