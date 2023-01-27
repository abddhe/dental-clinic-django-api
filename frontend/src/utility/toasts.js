import {toast} from "react-hot-toast";

const toastPosition = document.body.offsetWidth < 1000 ? 'top-center' : 'top-right'

export const toastSuccess = (message) => toast.success(message, {
	duration: 4000,
	position: toastPosition,

	// Styling
	style: {
		backgroundColor: "green",
		color: "#fff",
	},
	className: "",
	// Aria
	ariaProps: {
		role: "status",
		"aria-live": "polite",
	},
});
export const toastError = (message) => toast.error(message, {
	duration: 4000,
	position: toastPosition,

	// Styling
	style: {
		backgroundColor: "red",
		color: "#fff",
	},
	className: "",
	// Aria
	ariaProps: {
		role: "status",
		"aria-live": "polite",
	},
});

