//This file contains the status of the sidebar
import { ref, computed } from 'vue'

//Reactive varible on/off
export const collapsed = ref(false)
export const toggleSidebar = () => (collapsed.value = !collapsed.value)

export const SIDEBAR_WIDTH=200
export const SIDEBAR_WIDTH_COLLAPSED=40
export const sidebarWidth=computed( () => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED :SIDEBAR_WIDTH}px`)


