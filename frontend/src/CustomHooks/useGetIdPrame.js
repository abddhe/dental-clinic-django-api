import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useGetIdPram = () => {
    const routerPram = useParams();
    return parseInt(routerPram.id);
};
