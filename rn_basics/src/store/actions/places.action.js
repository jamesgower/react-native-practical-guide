import {
	ADD_PLACE,
	DELETE_PLACE,
	DESELECT_PLACE,
	SELECT_PLACE
} from "./types.action";

export const addPlace = placeName => {
	return {
		type: ADD_PLACE,
		placeName
	};
};

export const deletePlace = () => {
	return {
		type: DELETE_PLACE
	};
};

export const selectPlace = key => {
	return {
		type: SELECT_PLACE,
		placesKey: key
	};
};

export const deselectPlace = () => {
	return {
		type: DESELECT_PLACE
	};
};
