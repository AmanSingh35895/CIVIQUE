import React from "react";
import PropTypes from "prop-types";
const noOp = () => { };
const defaultList = [];
function ChipView(props) {
    const {
        options = defaultList,
        setoptions = noOp,
        values = defaultList,
        setvalues = noOp,
        children,
        ...restProps
    } = props;
    const deleteoption = (value) => (event) => {
        event?.preventDefault();
        setoptions((options) => options.filter((option) => option.value !== value));
    };
    const toggle = (value) => (event) => {
        event?.preventDefault();
        setvalues((values) => {
            const newValues = values.includes(value) ? values.filter((v) => v !== value) : [...values, value];
            return options.filter((option) => newValues.includes(option.value)).map((option) => option.value);
        });
    };

    React.useEffect(() => {
        setvalues((values) => {
            if (values.every((value) => options.find((option) => option.value === value))) {
                return values;
            }
            return options.filter((option) => values.includes(option.value)).map((option) => option.value);
        });
    }, [options]);
    return (
        <div {...restProps}>
            {children instanceof Function
                ? options.map((option, index) =>
                    children({
                        index,
                        value: option.value,
                        label: option.label,
                        isSelected: values.includes(option.value),
                        toggle: toggle(option.value),
                        delete: deleteoption(option.value),
                    })
                )
                : children}
        </div>
    );
}

ChipView.propTypes = {
    className: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, value: PropTypes.string })),
    setoptions: PropTypes.func,
    values: PropTypes.arrayOf(PropTypes.string),
    setvalues: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
};

export { ChipView };