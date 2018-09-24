import classnames from 'classnames';
import injectSheets from 'react-jss';
import React from 'react';
import ReactPlayer from 'react-player';
import styles from './MediaPlayer.jss';
import { Line } from 'rc-progress';

import PlayIcon from '../../images/player_play.svg';
import PauseIcon from '../../images/player_pause.svg';
import NextIcon from '../../images/player_next.svg';
import PrevIcon from '../../images/player_previous.svg';

const SONGS = [
  { title: 'Can\'t you hear me calling', author: 'Bill Monroe', url: './mp3/cantyouhear.mp3' },
  { title: 'Kavárna pod věží', author: 'Pavel Handlík', url: './mp3/kavarna.mp3' },
];

@injectSheets(styles)
export default class MediaPlayer extends React.PureComponent {
  state = {
    playing: false,
    played: 0,
    currentSongIndex: 0,
  }

  load = index => {
    this.setState({ currentSongIndex: index, playing: true });
  }

  togglePlay = () => {
    this.setState({ playing: !this.state.playing });
  }

  playPrevious = () => {
    const { currentSongIndex } = this.state;
    const previousSongIndex = currentSongIndex === 0 ? SONGS.length - 1 : currentSongIndex - 1;

    this.setState({ currentSongIndex: previousSongIndex });
  }

  playNext = () => {
    const { currentSongIndex } = this.state;
    const nextSongIndex = currentSongIndex === SONGS.length - 1 ? 0 : currentSongIndex + 1;

    this.setState({ currentSongIndex: nextSongIndex });
  }

  get renderPlayer() {
    const { classes, theme: { colors } } = this.props;
    const { playing, played, currentSongIndex } = this.state;
    const { title, url } = SONGS[currentSongIndex];

    const PlaybackIcon = playing ? PauseIcon : PlayIcon;

    return (
      <React.Fragment>
        <h5 className={classes.title}>{title}</h5>

        <div className={classes.buttons}>
          <PrevIcon onClick={this.playPrevious} className={classes.button} />
          <PlaybackIcon onClick={this.togglePlay} className={classes.button} />
          <NextIcon onClick={this.playNext} className={classes.button} />
        </div>

        <Line
          className={classes.progress}
          strokeLinecap="square"
          percent={played * 100}
          trailColor={colors.white}
          strokeColor={colors.primary}
        />

        <ReactPlayer
          className={classes.player}
          playing={playing}
          url={url}
          onProgress={state => this.setState(state)}
          onEnded={this.playNext}
        />
      </React.Fragment>
    );
  }

  renderSong = ({ author, title }, index) => {
    const { classes } = this.props;
    const { currentSongIndex } = this.state;
    const isActive = index === currentSongIndex;

    return (
      <li
        key={title}
        className={classes.item}
        onClick={() => this.load(index)}
      >
        <PlayIcon className={classnames(classes.itemIcon, isActive && classes.itemIcon__active)} />

        <div className={classes.itemInfo}>
          <div className={classes.itemTitle}>{title}</div>
          <div className={classes.itemAuthor}>{author}</div>
        </div>
      </li>
    );
  }

  get renderSongsList() {
    const { classes } = this.props;

    return (
      <div className={classes.listWrapper}>
        <div className={classes.album} />

        <ul className={classes.list}>
          {SONGS.map(this.renderSong)}
        </ul>
      </div>
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        {this.renderPlayer}
        {this.renderSongsList}
      </div>
    );
  }
}
