import React from 'react'
import Restore from 'react-restore'
import link from '../../../resources/link'
import svg from '../../../resources/svg'

class RingIcon extends React.Component {
  constructor (...args) {
    super(...args)
    this.state = {}
  }
  // glitch (el) {
  //   return (
  //     <div className={this.state.glitchOn ? 'glitch glitchOn' : 'glitch'}>
  //       {[...Array(10).keys()].map(i => <div key={i + 'hg'} className='line'>{el}</div>)}
  //       {!this.state.glitchOn ? <div className='line lastLine'>{el}</div> : null }
  //     </div>
  //   )
  // }
  render () {
    const { color, svgLookup, img } = this.props
    return (
      <div 
        className='ringIcon'
        style={{
          borderColor: color
        }}
      >
        <div className='ringIconInner' style={{ color: color }}>
          {svgLookup ? (
            svg[svgLookup.name] ? svg[svgLookup.name](svgLookup.size) : null
          ) : img ? (
            <img src={img} />
          ) : (
            svg.eth(18)
          )}
        </div>
      </div>
    )
  }
}

export default Restore.connect(RingIcon)