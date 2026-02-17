'use client';
import classes from './Toolbox.module.css';
import PenIcon from '../../../public/ToolboxSVG/PenIcon.svg';
import Image from 'next/image';
import { useState } from 'react';

import ExpandIcon from '../../../public/ToolboxSVG/Expand.svg';
import CollapseIcon from '../../../public/ToolboxSVG/Collapse.svg';
import EraserIcon from '../../../public/ToolboxSVG/Eraser.svg';

export default function Toolbox() {
    const [collapsed, setCollapsed] = useState(true);
    const [activeTool, setActiveTool] = useState<string | null>(null);
    const [erase, setErase] = useState(false);

    return (
        <div className={classes.toolboxContainer}>
            {activeTool === 'freeDraw' &&
                <div className={`${classes.eraserContainer} ${collapsed ? classes.collapsed : ''}`}>
                    <button className={erase ? classes.active : ''} onClick={() => { setErase(!erase) }}>
                        <Image className={classes.eraserIcon} src={EraserIcon} alt="Eraser" />
                    </button>
                </div>
            }
            <div className={`${classes.toolContainer} ${collapsed ? classes.collapsed : classes.expanded}`}>
                <button className={activeTool === 'freeDraw' ? classes.active : ''} onClick={() => { activeTool === 'freeDraw' ? setActiveTool(null) : setActiveTool('freeDraw') }}>
                    <Image src={PenIcon} alt="Pen" style={{ filter: 'brightness(.5) invert(1)' }} />
                </button>
                <button></button>
                <button></button>
                <button></button>
            </div>
            <div className={`${classes.toolBezel} ${collapsed ? classes.collapsed : classes.expanded}`}>
                <button className={classes.toolBezelBtn} onClick={() => setCollapsed(!collapsed)}>
                    {collapsed ? <Image className={classes.expandBtn} src={ExpandIcon} alt="Expand" /> : <Image className={classes.collapseBtn} src={CollapseIcon} alt="Collapse" />}
                </button>
            </div>
        </div>
    );
}