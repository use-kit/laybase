import { stringToIcon } from '@iconify/utils/lib/icon/name'

// import { getIconData } from '@iconify/core/lib/storage/functions'

// TODO: support getIconData to replace iconify/react && iconify/vue
export function getIcon(icon: string) {
  const iconName = stringToIcon(icon, false, true)
  console.log('name', iconName)
}

getIcon('mdi:home')
