import {Component} from 'react'

import {
  MainContainer,
  MemeGeneratorContainer,
  Heading,
  FormAndMemeContainer,
  MemeContainer,
  TextContent,
  FormContainer,
  CustomLabel,
  CustomInput,
  CustomSelect,
  CustomOption,
  GenerateButton,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
class MemeGenerator extends Component {
  state = {
    optionId: fontSizesOptionsList[0].optionId,
    backgroundImageInput: '',
    topTextInput: '',
    bottomTextInput: '',
    backgroundImage: '',
    topText: '',
    bottomText: '',
    selectedFontSize: '',
  }

  onChangeBackgroundImage = event => {
    this.setState({backgroundImageInput: event.target.value})
  }

  onChangeOfTopTextInput = event => {
    this.setState({topTextInput: event.target.value})
  }

  onchangeBottomTextInput = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  onGenerateMeme = event => {
    event.preventDefault()
    const {
      backgroundImageInput,
      topTextInput,
      bottomTextInput,
      optionId,
    } = this.state
    this.setState({
      backgroundImage: backgroundImageInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      selectedFontSize: optionId,
    })
  }

  render() {
    const {
      backgroundImage,
      topText,
      bottomText,
      optionId,
      backgroundImageInput,
      topTextInput,
      bottomTextInput,
      selectedFontSize,
    } = this.state

    return (
      <MainContainer>
        <MemeGeneratorContainer>
          <Heading>Meme Generator</Heading>
          <FormAndMemeContainer>
            <MemeContainer data-testid="meme" backgroundImage={backgroundImage}>
              <TextContent selectedFontSize={selectedFontSize}>
                {topText}
              </TextContent>
              <TextContent selectedFontSize={selectedFontSize}>
                {bottomText}
              </TextContent>
            </MemeContainer>
            <FormContainer onSubmit={this.onGenerateMeme}>
              <CustomLabel htmlFor="backgroundImgUrl">Image URL</CustomLabel>
              <CustomInput
                id="backgroundImgUrl"
                type="text"
                value={backgroundImageInput}
                onChange={this.onChangeBackgroundImage}
                placeholder="Enter the Image URL"
                autoComplete="off"
              />
              <CustomLabel htmlFor="topText">Top Text</CustomLabel>
              <CustomInput
                id="topText"
                type="text"
                value={topTextInput}
                onChange={this.onChangeOfTopTextInput}
                placeholder="Enter the Top Text"
                autoComplete="off"
              />
              <CustomLabel htmlFor="bottomText">Bottom Text</CustomLabel>
              <CustomInput
                id="bottomText"
                type="text"
                value={bottomTextInput}
                onChange={this.onchangeBottomTextInput}
                placeholder="Enter the Bottom Text"
                autoComplete="off"
              />
              <CustomLabel htmlFor="select">Font Size</CustomLabel>
              <CustomSelect
                id="select"
                value={optionId}
                onChange={this.onChangeOptionId}
              >
                {fontSizesOptionsList.map(each => (
                  <CustomOption key={each.optionId} value={each.optionId}>
                    {each.displayText}
                  </CustomOption>
                ))}
              </CustomSelect>
              <GenerateButton type="submit">Generate</GenerateButton>
            </FormContainer>
          </FormAndMemeContainer>
        </MemeGeneratorContainer>
      </MainContainer>
    )
  }
}

export default MemeGenerator
