import { QuestionCircleOutlined } from '@ant-design/icons';
import React from 'react';
import Tooltip from 'react-png-tooltip';

type Props = {
    content?: string;
};

function ToolTip(props: Props) {
    return (
        <Tooltip
            fill=""
            background=""
            timeoutDelay={9}
            shouldDisableClick={false}
            shouldDisableHover={false}
            wrapperClassName=""
            className=""
            tooltip={<QuestionCircleOutlined style={{ color: '#FF6600' }} />}
        >
            <div>{props.content}</div>
        </Tooltip>
    );
}

export default ToolTip;
