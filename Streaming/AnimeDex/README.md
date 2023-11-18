## Streaming - AnimeDex

### Html Code
```
<div id='animeDex' class='aD-video'>
  <div class='vid'></div>
  <div class='info'>
    <p>You are watching</p>
    <p class='vid-title'></p>
    <p>If current server doesn't work please try other servers beside. </p>
  </div>
  <div class='selectItem' data-type='server'>
    <div class='s-title'><span>Server:</span></div>
    <ul class='s-item'></ul>
  </div>
  <h4>Link Download:</h4>
  <div class='selectItem' data-type='download'>
    <div class='s-title'><span>Quality:</span></div>
    <ul class='s-item'></ul>
  </div>
  <h4>List Of Episode:</h4>
  <div class='selectItem' data-type='episode'>
    <ul class='s-item'></ul>
  </div>
</div>
```

### js Code streamDexFiles
1. Format JSON
```
{
  'title': 'VIDEO_TITLE',
  'episode': 'EPISODE_NUMBER',
  'server': [{
    'name': 'NAME_SERVER',
    'url': 'SERVER_URL'
  }],
  'download': [{
    'name': '#URL_NAME',
    'url': '#DOWNLOAD_URL'
  }]
}
```
EXAMPLE: check file `streamDexFiles`.
