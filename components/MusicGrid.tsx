import React, {useEffect, useState, useRef} from "react"
import {useMusicSelector, useMusicActions} from "../store"
import AudioEngine from "../structures/AudioEngine"
import Slider from "react-slider"
import play from "../assets/svg/play.svg"
import pause from "../assets/svg/pause.svg"
import functions from "../structures/Functions"
import * as Tone from "tone"
import "./styles/musicgrid.less"

interface Props {
    audio: string
    cover: string
}

const MusicGrid: React.FunctionComponent<Props> = (props) => {
    const {currentAudio} = useMusicSelector()
    const {setCurrentAudio} = useMusicActions()
    const [paused, setPaused] = useState(true)
    const [duration, setDuration] = useState(0)
    const [progress, setProgress] = useState(0)
    const [secondsProgress, setSecondsProgress] = useState(0)
    const [dragProgress, setDragProgress] = useState<number | null>(null)
    const [dragging, setDragging] = useState(false)
    const [initialized, setInitialized] = useState(false)
    const [img, setImg] = useState("")
    const sliderRef = useRef<Slider>(null)
    const startTimeRef = useRef<number>(0)
    const offsetRef = useRef<number>(0)

    useEffect(() => {
        if (sliderRef.current) sliderRef.current.resize()
    })

    /*
    const updateSongCover = async () => {
        const songCover = await functions.songCover(props.audio)
        setImg(songCover)
    }

    useEffect(() => {
        updateSongCover()
    }, [props.audio])*/

    const loadAudio = async () => {
        await AudioEngine.initialize()
        await AudioEngine.load(props.audio)
        setDuration(AudioEngine.duration)
    }

    useEffect(() => {
        if (currentAudio !== props.audio) {
            setPaused(true)
            setProgress(0)
            setSecondsProgress(0)
            offsetRef.current = 0
        }
    }, [currentAudio, props.audio])

     useEffect(() => {
        const id = setInterval(() => {
            if (paused || !duration) return
            const elapsed = Tone.now() - startTimeRef.current
            const current = offsetRef.current + elapsed

            if (!dragging) {
                setSecondsProgress(current)
                setProgress((current / duration) * 100)
            }
        }, 1000)
        return () => clearInterval(id)
    }, [paused, duration, dragging])

    const togglePlaying = async (force?: boolean) => {
        await Tone.start()
        if (!initialized) await loadAudio()

        if (currentAudio !== props.audio) {
            await loadAudio()
            setCurrentAudio(props.audio)
            offsetRef.current = 0
        }

        if (paused || force) {
            startTimeRef.current = Tone.now()
            await AudioEngine.play(offsetRef.current)
            setPaused(false)
        } else {
            offsetRef.current += Tone.now() - startTimeRef.current
            AudioEngine.stop()
            setPaused(true)
        }
    }

    const seek = async (position: number) => {
        let secondsProgress = (position / 100) * duration
        offsetRef.current = secondsProgress
        startTimeRef.current = Tone.now()

        AudioEngine.stop()
        if (!paused) {
            await AudioEngine.play(secondsProgress)
        }

        setSecondsProgress(secondsProgress)
        setProgress(position)
        setDragging(false)
    }

    const updateProgressText = (value: number) => {
        const secondsProgress = (value / 100) * duration
        setDragProgress(secondsProgress)
    }

    return (
        <div className="musicgrid">
            <img className="musicgrid-img" src={props.cover} draggable={false}/>
            <div className="miniplayer">
                <div className="miniplayer-play-container">
                    <img className="miniplayer-play-button" src={paused ? play : pause} draggable="false" 
                    onClick={() => togglePlaying()}/>
                </div>
                <div className="miniplayer-progress-container">
                    <Slider className="miniplayer-slider" trackClassName="miniplayer-slider-track" 
                    thumbClassName="miniplayer-slider-thumb" min={0} max={100} ref={sliderRef}
                    value={dragging ? ((dragProgress ?? 0) / duration) * 100 : progress} 
                    onBeforeChange={() => setDragging(true)} 
                    onChange={(value: number) => updateProgressText(value)} 
                    onAfterChange={(value: number) => seek(value)}/>
                </div>
                <div className="miniplayer-time-container">
                    <span className="miniplayer-time-text">{dragging ? functions.formatSeconds(dragProgress ?? 0) : functions.formatSeconds(secondsProgress)}</span>
                    <span className="miniplayer-time-text">/</span>
                    <span className="miniplayer-time-text">{functions.formatSeconds(duration)}</span>
                </div>
            </div>
        </div>
    )
}

export default MusicGrid