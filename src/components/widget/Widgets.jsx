import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton
} from 'react-twitter-embed';
import { Search } from '@mui/icons-material';
import React from 'react';
import './Widgets.css'

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets_input'>
        <Search className='widgets_serachIcon' />
        <input placeholder='キーワード検索' type='text' />
      </div>

      <div className='widgets_widgetContainer'>
        <h2>いまどうしてる？</h2>

        <TwitterTweetEmbed tweetId={'1716358192198975961'} />

        <TwitterShareButton
          url={'https://twitter.com/ariyoshihiroiki'}
          options={{ text: '#React勉強中', via: 'ariyoshihiroiki' }}
        />
      </div>
    </div>
  );
}

export default Widgets;