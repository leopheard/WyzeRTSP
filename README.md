<!DOCTYPE html>
<html dir="ltr" lang="en-US">
<head>
  <meta charset="utf-8" />
  <!-- v19130 -->

<h3>Wyze Cam RTSP &ndash; Wyze</h3>
The following is simply a backup of the RTSP firmware for the Wyze cams taken from the following link on 01/20/2021:
<a href="https://wyzelabs.zendesk.com/hc/en-us/articles/360026245231-Wyze-Cam-RTSP">https://wyzelabs.zendesk.com/hc/en-us/articles/360026245231-Wyze-Cam-RTSP</a>

<h2><strong>What is RTSP?</strong></h2>
<p>Real Time Streaming Protocol (RTSP) is a standard network protocol designed to&nbsp;establish and control media sessions between endpoints. Due to hardware&nbsp;limitation, RTSP could only be achieved as a separate firmware version for both Wyze Cam v2&nbsp;and Wyze Cam Pan.</p>
<h2><strong>Support for RTSP</strong></h2>
<p>We don't have the resources to keep developing two branches of firmware for Wyze Cam v2 and Wyze Cam Pan. <span>At this time, we are not committing to ongoing maintenance for RTSP firmware. We will deliver security updates as needed.</span></p>
<section class="pdf_page">
<div class="textlayer">
<h2><strong>How to install the RTSP Firmware</strong></h2>
<ol>
<li>Download the <a href="https://github.com/leopheard/WyzeRTSP/blob/master/resources/demo_v2_rtsp_4.28.4.49.bin.zip?raw=true" target="_blank" rel="noopener">Wyze Cam v2 RTSP file</a>, or the <a href="https://github.com/leopheard/WyzeRTSP/blob/master/resources/demo_v2_rtsp_4.28.4.49.bin.zip?raw=true" target="_blank" rel="noopener">Wyze Cam Pan RTSP file</a> (Wyze Cam v3 RTSP is not available yet and we do not have an estimate for when it will be ready but it is planned for later).</li>
<li>Unzip the file, rename the contents to '<strong>demo.bin</strong>', and transfer them to a microSD card's root directory.</li>
<li>Unplug your Wyze Cam and insert the prepared microSD card.<br /><img src="/hc/article_attachments/360042364711/microSD__1_.png" alt="https://github.com/leopheard/WyzeRTSP/blob/master/resources/media/microSD%20(1).png?raw=true" width="385" height="267" /></li>
<li>Hold the camera's <strong>Setup</strong> button while plugging in the USB cable and continue to hold the <strong>Setup</strong> button until the light turns solid blue.<br /><img src="https://github.com/leopheard/WyzeRTSP/blob/master/resources/media/4-1.png?raw=true" alt="__4__1_.png" /><img src="https://github.com/leopheard/WyzeRTSP/blob/master/resources/media/setup-button.jpg?raw=true" alt="setup-button.jpg" width="241" height="200" /></li>
<li>Once the light is solid blue, release the <strong>Setup</strong> button and wait for 3-4 minutes. The camera will reboot, and the status light will change during this time.<br />
<ul>
<li><em>Note: The "Solid Blue" in this case is not the same as the one normally seen on the camera. Instead, both the blue and yellow LEDs will be on at once, making it appear to be a lighter blue.<br /><br /></em></li>
</ul>
</li>
<li>Once this process is finished, you should see the Wyze Cam in your Home tab without going through the setup process as long as it was previously paired with your account.</li>
</ol>
<h2><strong>How to start using RTSP</strong></h2>
<ol>
<li>Once your Wyze Cam is back online, you can access the RTSP function from the live stream (Wyze app version 2.3 or later) under <strong>Settings -&gt; Advanced Settings -&gt; RTSP</strong></li>
<li>The app will automatically check if the installed firmware version is RTSP compatible. If not, please repeat the installation process above.</li>
<li>Next, turn on the <strong>RTSP toggle</strong></li>
<li>You'll be prompted to set up a username and password for this Wyze Cam. Both the username and password should be 4 – 10 characters without special characters (only a-z, and 0-9)
<ul>
<li>PLEASE NOTE - This username and password is unique to just this camera. Please either use something that's easy to remember or take note of them somewhere, as these will be needed to access the camera's stream via RTSP</li>
</ul>
</li>
<li>Click “<strong>Generate URL</strong>”, and the RTSP URL will show on the next screen. Use this for streaming through any RTSP compatible player on the same local network as the Wyze Cam.</li>
</ol>
</div>
