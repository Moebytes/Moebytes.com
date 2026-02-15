import * as Tone from "tone"
import silence from "../assets/images/silence.mp3"

export default class AudioEngine {
    public static player: Tone.Player
    public static audioNode: Tone.ToneAudioNode
    public static gainNode: Tone.Gain
    public static initialized = false

    public static initialize = async () => {
        if (this.initialized || typeof window === "undefined") return
        await Tone.start()

        this.player = new Tone.Player({url: silence, autostart: false, loop: true})
        // @ts-ignore
        this.audioNode = new Tone.ToneAudioNode()
        this.gainNode = new Tone.Gain(1)
        this.audioNode.input = this.player
        this.audioNode.output = this.gainNode.input
        this.audioNode.input.chain(this.audioNode.output)
        this.audioNode.toDestination()

        this.initialized = true
    }

    public static load = async (url: string) => {
        if (!this.player) await this.initialize()
        await this.player!.load(url)
    }

    public static play = async (offset = 0) => {
        if (!this.player) await this.initialize()
        this.player.start(0, offset)
    }

    public static stop = () => {
        this.player?.stop()
    }

    public static pause = () => {
        this.player?.stop()
    }

    public static get duration(): number {
        return this.player?.buffer?.duration ?? 0 / this.player.playbackRate
    }
}