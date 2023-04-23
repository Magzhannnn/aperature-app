import IdenticalWrap from "../../UI/IdenticalWrap/IdenticalWrap";
import { IIdentical } from "../../types/identical";

const FeaturedWrapUp = () => {
  const item: IIdentical = {
    value: "featured1",
    title: "Sunset at Mount Fuji",
    text: "Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non.",
    clock: '1"',
    shape: "f/16",
    iso: 400,
    place: "Japan",
    placeLink:
      "https://www.google.kz/maps/place/%D0%A4%D1%83%D0%B4%D0%B7%D0%B8%D1%8F%D0%BC%D0%B0/@35.3606233,138.7067637,14z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?hl=ru",
  };
  return <IdenticalWrap item={item} />;
};

export default FeaturedWrapUp;
