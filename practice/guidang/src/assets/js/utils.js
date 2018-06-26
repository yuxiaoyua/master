/**
 * by chenyao
 */
/**
 * 获取当前屏幕宽度
 */
export const getScreenWidth = () => document.documentElement.clientWidth

/**
 * 得到当前屏幕的 rem 数值
 * @return {number} 当前屏幕的 rem 数值
 */
export const getRem = () => 100 * (getScreenWidth() / 1080)
