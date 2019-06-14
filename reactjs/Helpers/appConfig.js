let app_option = {
	site_name : 'Work calendar',
}
let status_txt = window._appConfig.work_status
let status_color = window._appConfig.work_status_color
export let work_status = typeof status_txt !== 'object' ? JSON.parse(status_txt) : status_txt;
export let work_status_color = typeof status_color !== 'object' ? JSON.parse(status_color) : status_color;
export default app_option;