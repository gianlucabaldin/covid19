### Log html

```
it('should have a Box', () => {
    wrapper = mount(<ChartItaly />);
    console.log(wrapper.debug());
})
```

### Look for html item

```
it('should have an email field', () => {
    expect(container.find('input[type="email"]').length).toEqual(1);
});
// or
it('should have an email field', () => {
    expect(wrapper.find('.MuiTypography-h6').exists()).toEqual(true);
});

```

### Check html item properties

```
it('should have proper props for email field', () => {
    expect(container.find('input[type="email"]').props()).toEqual({
        className: 'mx-auto my-2',
        onBlur: expect.any(Function),
        placeholder: 'email',
        type: 'email',
    });
});
```

### Look for text inside

```
// https://github.com/FormidableLabs/enzyme-matchers/blob/master/packages/jest-enzyme/README.md
it('has a left-aligned `Covid 19` text', () => {
    expect(wrapper).toIncludeText('Covid 19');
});

// or with {getByText}

it('has a center-aligned project description - with Enzyme', () => {
    const { getByText } = render(<Header />);
    expect(getByText('Latest updates & historical data')).toBeInTheDocument();
});
```

### Look for React Component children (inside another)

```
it('should have 3 buttons', () => {
    let wrapper = mount(<NavButtons />);
    expect(wrapper.find('WithStyles(ForwardRef(Button))').length).toEqual(3);
});
```
