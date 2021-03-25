import React from "react";
import { FlexRow } from "./style";
import Sticker from "../../components/Sticker";

const StickerRow = () => {
	return (
		<FlexRow>
			<Sticker
				title="Nebo"
				subtitle="Ovo je opis neba i svih njegovih mnogobrojnih osobina"
				imageSource="https://www.daysoftheyear.com/wp-content/uploads/look-up-at-the-sky-day-1.jpg"
			/>
			<Sticker
				color="#820014"
				title="Vulkan"
				subtitle="Ovo je opis vulkana i svih njegovih mnogobrojnih osobina"
				imageSource="https://images.theconversation.com/files/109822/original/image-20160201-32240-8oqf5e.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
			/>
			<Sticker
				color="#135200"
				title="Šuma"
				subtitle="Ovo je opis šume i svih njenih mnogobrojnih osobina"
				imageSource="https://images2.minutemediacdn.com/image/upload/c_crop,h_1351,w_2400,x_0,y_0/f_auto,q_auto,w_1100/v1571796144/shape/mentalfloss/604599-gettyimages-1083893950.jpg"
			/>
			<Sticker
				color="#874d00"
				title="Pustinja"
				subtitle="Ovo je opis pustinje i svih njenih mnogobrojnih osobina"
                imageSource="https://cdn.mos.cms.futurecdn.net/deaceNXy23NF8VsCrwZPgn.jpg"
			/>
		</FlexRow>
	);
};

export default StickerRow;
