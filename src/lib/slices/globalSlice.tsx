import { sidebarLinks } from "@/constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JSX } from "react";

interface StateType {
    currentView: JSX.Element,
    viewSidbar: boolean,
}

const initialState: StateType = {
    currentView: sidebarLinks[0].comp,
    viewSidbar: false,
}


export const globalSlice = createSlice({
    name: 'globalSlice',
    initialState,
    reducers: {
        setCurrentView: (state, action: PayloadAction<JSX.Element>) => { state.currentView = action.payload},
        setViewSidebar: (state, action: PayloadAction<boolean>) => { state.viewSidbar = action.payload},
        closeSidebar: (state) => { state.viewSidbar = false}

      },
})


export const { setCurrentView, setViewSidebar, closeSidebar } = globalSlice.actions;
export default globalSlice.reducer;