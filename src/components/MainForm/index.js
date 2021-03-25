import React from "react";
import * as style from "./style";

const MainForm = () => {
	return (
		<style.Form>
			<style.TitleContainer>Forma</style.TitleContainer>
			<style.FlexRow>
				<style.FlexColumn>
					<label>Field 1</label>
					<style.Input />
					<label>Field 2</label>
					<style.Input />
					<label>Field 3</label>
					<style.Input />
				</style.FlexColumn>
				<style.FlexColumn>
					<label>Field 4</label>
					<style.Input />
					<label>Field 5</label>
					<style.Input />
					<label>Field 6</label>
					<style.Input />
				</style.FlexColumn>
				<style.FlexColumn>
					<label>Field 7</label>
					<style.Input />
					<label>Field 8</label>
					<style.Input />
					<label>Field 9</label>
					<style.Input />
				</style.FlexColumn>
                <style.FlexColumn>
                    <label>Field 10</label>
                    <style.Input style={{height: '100%'}}/>
                </style.FlexColumn>
			</style.FlexRow>
		</style.Form>
	);
};

export default MainForm;
