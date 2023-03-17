import { devices } from '../constants/devices'

export function getDeviceDimensions(key: number): { width: number; height: number } | null {
	const device = devices[key]

	if (!device) {
		return null
	}

	return { width: device.width, height: device.height }
}
