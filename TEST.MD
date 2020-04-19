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

#### with toBeDefined()

```
it('contains Summary component', () => {
    expect(wrapper.find(<Summary />)).toBeDefined();
});
```

#### pointing to a particular inner className

Attention: with MaterialUi a <Box className="myClassname"> outputs as

```
<Box className="myClassname" ...>
    <div className="myClassname" ...>
    ...
```

so if you "only" look for ".className" an check the lenght, it will be 2 (not 1) !!! Use stronger selector, like elementType+className (i.e. below 'div.summary)

```
it('contains Summary component', () => {
    wrapper = mount(<MainContainer />);
    expect(wrapper.find('div.summary').length).toEqual(1);
});
```

```
it('should have 3 buttons', () => {
let wrapper = mount(<NavButtons />);
expect(wrapper.find('WithStyles(ForwardRef(Button))').length).toEqual(3);
});
```
