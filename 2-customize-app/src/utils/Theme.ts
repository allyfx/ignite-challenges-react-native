const theme1: Theme = {
  primary: '#273FAD',
  check: '#3FAD27',
  title: '#3D3D4D',
  background: '#F5F4F8',
  backgroundInput: '#F5F4F8',
  titleDone: '#A09CB1',
  backgroundDone: 'rgba(25, 61, 223, 0.1)',
  markColor: '#273FAD',
  inputText: '#A09CB1'
}

const theme2: Theme = {
  primary: '#483C67',
  backgroundInput: '#34313D',
  background: '#191622',
  title: '#FF79C6',
  backgroundDone: 'rgba(255, 121, 198, 0.1)',
  check: '#988BC7',
  titleDone: '#E1E1E6',
  markColor: '#FF79C6',
  inputText: '#A09CB1'
}

const theme3: Theme = {
  primary: '#483C67',
  backgroundInput: '#34313D',
  background: '#191622',
  title: '#67E480',
  backgroundDone: 'rgba(68, 71, 90, 0.1)',
  check: '#988BC7',
  titleDone: '#E1E1E6',
  markColor: '#67E480',
  inputText: '#A09CB1'
}

const theme4: Theme = {
  primary: '#191932',
  backgroundInput: '#212136',
  background: '#10101E',
  title: '#565BFF',
  backgroundDone: 'rgba(33, 33, 54, 0.3);',
  check: '#988BC7',
  titleDone: '#E1E1E6',
  markColor: '#565BFF',
  inputText: '#E1E1E6'
}

export interface Theme {
  primary: string,
  check: string,
  title: string,
  background: string,
  backgroundInput: string,
  backgroundDone: string,
  titleDone: string,
  markColor: string,
  inputText: string,
}

export const themes: Theme[] = [
  theme1,
  theme2,
  theme3,
  theme4,
]