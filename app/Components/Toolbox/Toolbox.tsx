'use client';
import classes from './Toolbox.module.css';
import PenIcon from '../../../public/ToolboxSVG/PenIcon.svg';
import Image from 'next/image';
import { useState } from 'react';

import ExpandIcon from '../../../public/ToolboxSVG/Expand.svg';
import CollapseIcon from '../../../public/ToolboxSVG/Collapse.svg';

export default function Toolbox() {

    const [collapsed, setCollapsed] = useState(true);

    return (
        <div className={classes.toolboxContainer}>
            <div className={`${classes.toolContainer} ${collapsed ? classes.collapsed : classes.expanded}`}>
                <button>
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