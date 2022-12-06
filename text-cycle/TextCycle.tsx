// this is a very old react library that uses lots of deprecated stuff
// I've hacked the code a bit to get it to work in modern react,
// but still not perfect
// https://github.com/plemarquand/react-text-cycle/blob/master/src/TextCycle.jsx

import React, { Component, useCallback, useEffect, useRef, useState } from "react";
import { ReactDOM } from "react";
import classnames from "classnames";
import s from "./TextCycle.module.css";

export function AnimationContainer({ children, animState }: { children: React.ReactNode, animState: string }) {
    return (
        <div className={classnames(s.animContainer, animState)}>
            <div className={s.text}>
                {children}
            </div>
        </div>
    )
}

export default function TextCycle(props: {
    items: string[],
    duration?: number,
    className?: string,
    textClassName?: string,
    bgClassName?: string
}) {
    const { duration = 3000, items, className, textClassName, bgClassName } = props;
    const [activeItem, setActiveItem] = useState(() => items[0]);
    const [lastActiveItem, setLastActiveItem] = useState(() => items.at(-1));
    const [animState, setAnimState] = useState(s.in);
    const [outAnimState, setOutAnimState] = useState(s.out);
    const [index, setIndex] = useState(0);
    const [animWidth, setAnimWidth] = useState(0);
    const [oldWidth, setOldWidth] = useState(0);
    const [timeoutN, setTimeoutN] = useState(0);
    const [animTimeoutN, setAnimTimeoutN] = useState(0);
    const [mounted, setMounted] = useState(false);
    const shadowLayoutRef = useRef<HTMLDivElement>(null);

    const measureWidth = useCallback(() => {
        const newAnimWidth = shadowLayoutRef.current?.clientWidth;
        if (newAnimWidth !== undefined && newAnimWidth !== animWidth) {
            setOldWidth(animWidth);
            setAnimWidth(newAnimWidth);
            setAnimState(s.in);
            setOutAnimState(s.out);
        }
    }, []);

    useEffect(() => {
        setTimeoutN(window.setInterval(() => {
            setAnimTimeoutN(requestAnimationFrame(() => {
                const newIndex = (index + 1) % items.length;
                setActiveItem(items[newIndex]);
                setLastActiveItem(items[index]);
                setAnimState(s.inStart);
                setOutAnimState(s.outStart);
                setIndex(newIndex);
                setMounted(true);
            }));
        }, duration));

        measureWidth();
    }, []);

    const style = { width: animWidth ? animWidth : 0 };
    const bgStyle = { width: animWidth ? animWidth + 10 : 0 };
    return (
        <div className={classnames(s.txt, className)}>
            <div className={s.shadowLayout} ref={shadowLayoutRef}>
                {activeItem}
            </div>
            <div className={s.verticalSizer}>{activeItem}</div>
            <div className={s.bgContainer}>
                <div className={classnames(s.bg, mounted && s.bgAnim, bgClassName)} style={bgStyle}>
                    &nbsp;
                </div>
            </div>
            <div className={s.animWrapper} style={style}>
                <AnimationContainer animState={animState}>
                    {activeItem}
                </AnimationContainer>
                <AnimationContainer animState={outAnimState}>
                    {lastActiveItem}
                </AnimationContainer>
            </div>
        </div>
    );
}
/*
class TextCycle extends Component<{
    items: React.ReactNode[],
    duration?: number,
    animationStates?: {
        inStart?: string,
        in?: string,
        outStart?: string,
        out?: string
    },
    className?: string,
    textClassName?: string
}, {
    activeItem: React.ReactNode,
    lastActiveItem: React.ReactNode,
    animState: string,
    outAnimState: string,
    index: number,
    animWidth: number,
    oldWidth?: number
}> {
    static defaultProps = {
        duration: 3000,
        animationStates: {
            inStart: s.inStart,
            in: s.in,
            outStart: s.outStart,
            out: s.out
        }
    };

    timeout: number = null!;
    animTimeout: number = null!;
    refs: {
        shadowLayout: any;
    } = { shadowLayout: null };
    mounted: boolean = null!;

    UNSAFE_componentWillMount() {
        const { items, animationStates } = this.props;
        this.state = {
            activeItem: items[0],
            lastActiveItem: items[items.length - 1],
            animState: animationStates.in,
            outAnimState: animationStates.out,
            index: 0,
            animWidth: 0
        };
    }

    componentDidMount() {
        this.timeout = window.setInterval(() => {
            this.animTimeout = requestAnimationFrame(() => {
                const { items, animationStates } = this.props;
                const lastIndex = this.state.index;
                const index = (this.state.index + 1) % items.length;
                this.setState({
                    index,
                    activeItem: items[index],
                    lastActiveItem: items[lastIndex],
                    animState: animationStates.inStart,
                    outAnimState: animationStates.outStart
                }, () => this.mounted = true);
            });
        }, this.props.duration);

        this.measureWidth();
    }

    measureWidth() {
        const animWidth = ReactDOM.findDOMNode(this.refs.shadowLayout).clientWidth;
        if (animWidth !== this.state.animWidth) {
            this.setState({
                animWidth,
                oldWidth: this.state.animWidth,
                animState: this.props.animationStates.in,
                outAnimState: this.props.animationStates.out
            });
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
        cancelAnimationFrame(this.animTimeout);
    }

    componentDidUpdate() {
        this.animTimeout = requestAnimationFrame(() => this.measureWidth());
    }

    render() {
        const { animWidth, animState, outAnimState, activeItem, lastActiveItem } = this.state;
        const style = { width: animWidth ? animWidth : 0 };
        const bgStyle = { width: animWidth ? animWidth + 10 : 0 };
        return (
            <div className={classnames(s.txt, this.props.className)}>
                <div className={s.shadowLayout} ref='shadowLayout'>
                    {activeItem}
                </div>
                <div className={s.verticalSizer}>{activeItem}</div>
                <div className={s.bgContainer}>
                    <div className={classnames(s.bg, this.mounted && s.bgAnim, this.props.bgClassName)} style={bgStyle}>
                        &nbsp;
                    </div>
                </div>
                <div className={s.animWrapper} style={style}>
                    <AnimationContainer animState={animState}>
                        {activeItem}
                    </AnimationContainer>
                    <AnimationContainer animState={outAnimState}>
                        {lastActiveItem}
                    </AnimationContainer>
                </div>
            </div>
        );
    }
}

export default TextCycle;*/