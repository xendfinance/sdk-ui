import { useEffect, useState } from 'react';
import Datepicker from 'react-datepicker';
import moment from 'moment';
import { InputStyle } from './Styles';

type Props = {
    value?: Date;
    onChange: (e: string) => void;
    required?: boolean;
    minDate?: Date;
    label?: string;
};

const PickDate = (props: Props) => {
    const [date, setDate] = useState(new Date());
    const { required, minDate } = props;

    useEffect(() => {
        if (props.value) {
            setDate(props.value);
        }
        // eslint-disable-next-line
    }, [props.value])

    return (
        <InputStyle>
            <Datepicker
                selected={date}
                dateFormat="d MMM, yyyy"
                onChange={(date) => {
                    const timestamp = date?.valueOf();
                    if (timestamp) {
                        setDate(moment(timestamp).toDate());
                        props.onChange(moment(timestamp).format('YYYY-MM-DD'));
                    }
                }}
                required={required}
                minDate={minDate}
            />
        </InputStyle>
    );
}

export default PickDate;

