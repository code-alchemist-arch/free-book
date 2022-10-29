# UltraHandy.net

## Tracking

Example code for initialize Google tag for google analytics
```
<!-- Google (GA4) tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-TYPCWGQ3JC"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-TYPCWGQ3JC');
</script>
```


Link how to [Fire events](https://developers.google.com/analytics/devguides/collection/gtagjs/sending-data)

[Custom events](https://www.analyticsmania.com/post/how-to-track-custom-events-with-google-analytics-4/)