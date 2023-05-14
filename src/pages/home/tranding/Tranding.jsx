import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from './../../../components/switchTabs/SwitchTabs';

const Tranding = () => {
  const onTabChange = (tab) => {};

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Tranding</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
    </div>
  );
};

export default Tranding;
