import * as mm from "music-metadata"

export default class Functions {
    public static formatSeconds = (duration: number) => {
        let seconds = Math.floor(duration % 60)
        let minutes = Math.floor((duration / 60) % 60)
        let hours = Math.floor((duration / (60 * 60)) % 24)
        if (Number.isNaN(seconds) || seconds < 0) seconds = 0
        if (Number.isNaN(minutes) || minutes < 0) minutes = 0
        if (Number.isNaN(hours) || hours < 0) hours = 0

        const hoursStr = (hours === 0) ? "" : ((hours < 10) ? "0" + hours + ":" : hours + ":")
        const minutesStr = hours && (minutes < 10) ? "0" + minutes : minutes
        const secondsStr = (seconds < 10) ? "0" + seconds : seconds
        return `${hoursStr}${minutesStr}:${secondsStr}`
    }
    
    public static songCover = async (audio: string) => {
        let buffer = await fetch(audio).then((r) => r.arrayBuffer())
        const tagInfo = await mm.parseBuffer(new Uint8Array(buffer))
        const picture = tagInfo.common.picture
        if (picture) {
            let buffer = new Uint8Array()

            for (let i = 0; i < picture.length; i++) {
                const combined = new Uint8Array(buffer.length + picture[i].data.length)
                combined.set(buffer)
                combined.set(picture[i].data, buffer.length)
                buffer = combined
            }

            let binary = ""
            for (let i = 0; i < buffer.length; i++) {
                binary += String.fromCharCode(buffer[i])
            }
            const base64 = btoa(binary)
            
            return `data:${picture[0].format};base64,${base64}`
        } else {
            return ""
        }
    }
}