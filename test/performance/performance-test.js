TrouveurPerformanceTest = TestCase('TrouveurPerformanceTest');

TrouveurFunctions = {
	find : 'find',
	count : 'count',
	replace : 'replace',
	unhighlight : 'unhighlight',
	highlight : 'highlight',
};

function runnerPerformanceUsingWikipediaPage(functionToCall) {

	// Wikipedia GDP page, version "05:46, 23 August 2011"

	var html = document.createElement(html);
	html.innerHTML = '<head>\
	<title>Gross domestic product - Wikipedia, the free encyclopedia</title> \
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> \
	<meta http-equiv="Content-Style-Type" content="text/css" /> \
	<meta name="generator" content="MediaWiki 1.17wmf1" /> \
	<link rel="alternate" type="application/x-wiki" title="Edit this page" href="/w/index.php?title=Gross_domestic_product&amp;action=edit" /> \
	<link rel="edit" title="Edit this page" href="/w/index.php?title=Gross_domestic_product&amp;action=edit" /> \
	<link rel="apple-touch-icon" href="http://en.wikipedia.org/apple-touch-icon.png" /> \
	<link rel="shortcut icon" href="/favicon.ico" /> \
	<link rel="search" type="application/opensearchdescription+xml" href="/w/opensearch_desc.php" title="Wikipedia (en)" /> \
	<link rel="EditURI" type="application/rsd+xml" href="http://en.wikipedia.org/w/api.php?action=rsd" /> \
	<link rel="copyright" href="http://creativecommons.org/licenses/by-sa/3.0/" /> \
	<link rel="alternate" type="application/atom+xml" title="Wikipedia Atom feed" href="/w/index.php?title=Special:RecentChanges&amp;feed=atom" /> \
	<link rel="stylesheet" href="http://bits.wikimedia.org/en.wikipedia.org/load.php?debug=false&amp;lang=en&amp;modules=mediawiki%21legacy%21commonPrint%7Cmediawiki%21legacy%21shared%7Cskins%21vector&amp;only=styles&amp;skin=vector" type="text/css" media="all" /> \
	<meta name="ResourceLoaderDynamicStyles" content="" /><link rel="stylesheet" href="http://bits.wikimedia.org/en.wikipedia.org/load.php?debug=false&amp;lang=en&amp;modules=site&amp;only=styles&amp;skin=vector" type="text/css" media="all" /> \
	<style type="text/css" media="all">a.new,#quickbar a.new{color:#ba0000}\
	</style> \
	<script src="http://bits.wikimedia.org/en.wikipedia.org/load.php?debug=false&amp;lang=en&amp;modules=startup&amp;only=scripts&amp;skin=vector" type="text/javascript"></script> \
	<script type="text/javascript">if ( window.mediaWiki ) {\
	mediaWiki.config.set({"wgCanonicalNamespace": "", "wgCanonicalSpecialPageName": false, "wgNamespaceNumber": 0, "wgPageName": "Gross_domestic_product", "wgTitle": "Gross domestic product", "wgAction": "view", "wgArticleId": 12594, "wgIsArticle": true, "wgUserName": null, "wgUserGroups": ["*"], "wgCurRevisionId": 446272489, "wgCategories": ["Articles to be expanded from March 2011", "All articles to be expanded", "All articles with unsourced statements", "Articles with unsourced statements from August 2011", "Articles with unsourced statements from March 2008", "Articles with unsourced statements from March 2009", "Articles to be expanded from August 2009", "Articles with unsourced statements from July 2011", "Gross Domestic Product", "National accounts"], "wgBreakFrames": false, "wgRestrictionEdit": [], "wgRestrictionMove": [], "wgSearchNamespaces": [0], "wgFlaggedRevsParams": {"tags": {"status": {"levels": 1, "quality": 2, "pristine": 3}}}, "wgStableRevisionId": null, "wgRevContents": {"error": "Unable to get content.", "waiting": "Waiting for content"}, "wgVectorEnabledModules": {"collapsiblenav": true, "collapsibletabs": true, "editwarning": true, "expandablesearch": false, "footercleanup": false, "sectioneditlinks": false, "simplesearch": true, "experiments": true}, "wgWikiEditorEnabledModules": {"toolbar": true, "dialogs": true, "templateEditor": false, "templates": false, "addMediaWizard": false, "preview": false, "previewDialog": false, "publish": false, "toc": false}, "wgTrackingToken": "12555f54fe144260796f1e7fc51f25cb", "wikilove-recipient": "", "wikilove-edittoken": "+\\", "wikilove-anon": 0, "mbEditToken": "+\\", "Geo": {"city": "", "country": ""}, "wgNoticeProject": "wikipedia"});\
	}\
	</script> \
	\
	<!--[if lt IE 7]><style type="text/css">body{behavior:url("/w/skins-1.17/vector/csshover.min.htc")}</style><![endif]--></head> \
	<body class="mediawiki ltr ns-0 ns-subject page-Gross_domestic_product skin-vector"> \
	<div id="mw-page-base" class="noprint"></div> \
	<div id="mw-head-base" class="noprint"></div> \
	<!-- content --> \
	<div id="content"> \
	<a id="top"></a> \
	<div id="mw-js-message" style="display:none;"></div> \
	<!-- sitenotice --> \
	<div id="siteNotice"><!-- centralNotice loads here --></div> \
	<!-- /sitenotice --> \
	<!-- firstHeading --> \
	<h1 id="firstHeading" class="firstHeading">Gross domestic product</h1> \
	<!-- /firstHeading --> \
	<!-- bodyContent --> \
	<div id="bodyContent"> \
	<!-- tagline --> \
	<div id="siteSub">From Wikipedia, the free encyclopedia</div> \
	<!-- /tagline --> \
	<!-- subtitle --> \
	<div id="contentSub"></div> \
	<!-- /subtitle --> \
									<!-- jumpto --> \
	<div id="jump-to-nav"> \
	Jump to: <a href="#mw-head">navigation</a>,\
	<a href="#p-search">search</a> \
	</div> \
	<!-- /jumpto --> \
	<!-- bodytext --> \
	<div class="dablink">"GDP" redirects here. For other uses, see <a href="/wiki/GDP_(disambiguation)" title="GDP (disambiguation)">GDP (disambiguation)</a>.</div> \
	<div class="dablink">Not to be confused with <a href="/wiki/Gross_national_product" title="Gross national product">Gross national product</a>&#160;or <a href="/wiki/Gross_domestic_income" title="Gross domestic income">Gross domestic income</a>.</div> \
	<div class="thumb tright"> \
	<div class="thumbinner" style="width:252px;"><a href="/wiki/File:Gdp_nominal_and_ppp_2005_world_map_single_colour.png" class="image"><img alt="" src="http://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Gdp_nominal_and_ppp_2005_world_map_single_colour.png/250px-Gdp_nominal_and_ppp_2005_world_map_single_colour.png" width="250" height="208" class="thumbimage" /></a> \
	<div class="thumbcaption"> \
	<div class="magnify"><a href="/wiki/File:Gdp_nominal_and_ppp_2005_world_map_single_colour.png" class="internal" title="Enlarge"><img src="http://bits.wikimedia.org/skins-1.17/common/images/magnify-clip.png" width="15" height="11" alt="" /></a></div> \
	<a href="/wiki/CIA_World_Factbook" title="CIA World Factbook" class="mw-redirect">CIA World Factbook</a> 2005 figures of total <a href="/wiki/Real_versus_nominal_value_(economics)" title="Real versus nominal value (economics)">nominal</a> GDP (top) compared to <a href="/wiki/Purchasing_power_parity" title="Purchasing power parity">PPP</a>-adjusted GDP (bottom)</div> \
	</div> \
	</div> \
	<div class="thumb tright"> \
	<div class="thumbinner" style="width:252px;"><a href="/wiki/File:GDP_nominal_per_capita_world_map_IMF_2008.png" class="image"><img alt="" src="http://upload.wikimedia.org/wikipedia/commons/thumb/5/59/GDP_nominal_per_capita_world_map_IMF_2008.png/250px-GDP_nominal_per_capita_world_map_IMF_2008.png" width="250" height="114" class="thumbimage" /></a> \
	<div class="thumbcaption"> \
	<div class="magnify"><a href="/wiki/File:GDP_nominal_per_capita_world_map_IMF_2008.png" class="internal" title="Enlarge"><img src="http://bits.wikimedia.org/skins-1.17/common/images/magnify-clip.png" width="15" height="11" alt="" /></a></div> \
	Countries by 2008 GDP (nominal) per capita (IMF, October 2008 estimate)</div> \
	</div> \
	</div> \
	<div class="thumb tright"> \
	<div class="thumbinner" style="width:252px;"><a href="/wiki/File:GDP_PPP_Per_Capita_IMF_2008.png" class="image"><img alt="" src="http://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/GDP_PPP_Per_Capita_IMF_2008.png/250px-GDP_PPP_Per_Capita_IMF_2008.png" width="250" height="114" class="thumbimage" /></a> \
	<div class="thumbcaption"> \
	<div class="magnify"><a href="/wiki/File:GDP_PPP_Per_Capita_IMF_2008.png" class="internal" title="Enlarge"><img src="http://bits.wikimedia.org/skins-1.17/common/images/magnify-clip.png" width="15" height="11" alt="" /></a></div> \
	<a href="/wiki/List_of_countries_by_GDP_(PPP)_per_capita" title="List of countries by GDP (PPP) per capita">GDP (PPP) per capita</a></div> \
	</div> \
	</div> \
	<p><b>Gross domestic product</b> (<b>GDP</b>) refers to the market value of all final goods and services produced in a country in a given period. GDP <a href="/wiki/Per_capita" title="Per capita">per capita</a> is often considered an indicator of a country\'s <a href="/wiki/Standard_of_living" title="Standard of living">standard of living</a>.<sup id="cite_ref-0" class="reference"><a href="#cite_note-0"><span>[</span>1<span>]</span></a></sup><sup id="cite_ref-1" class="reference"><a href="#cite_note-1"><span>[</span>2<span>]</span></a></sup></p> \
	<p>Gross domestic product is related to <a href="/wiki/National_accounts" title="National accounts">national accounts</a>, a subject in <a href="/wiki/Macroeconomics" title="Macroeconomics">macroeconomics</a>.</p> \
	<table id="toc" class="toc"> \
	<tr> \
	<td> \
	<div id="toctitle"> \
	<h2>Contents</h2> \
	</div> \
	<ul> \
	<li class="toclevel-1 tocsection-1"><a href="#History"><span class="tocnumber">1</span> <span class="toctext">History</span></a></li> \
	<li class="toclevel-1 tocsection-2"><a href="#Determining_GDP"><span class="tocnumber">2</span> <span class="toctext">Determining GDP</span></a> \
	<ul> \
	<li class="toclevel-2 tocsection-3"><a href="#Income_approach"><span class="tocnumber">2.1</span> <span class="toctext">Income approach</span></a></li> \
	<li class="toclevel-2 tocsection-4"><a href="#Expenditure_approach"><span class="tocnumber">2.2</span> <span class="toctext">Expenditure approach</span></a> \
	<ul> \
	<li class="toclevel-3 tocsection-5"><a href="#Components_of_GDP_by_expenditure"><span class="tocnumber">2.2.1</span> <span class="toctext">Components of GDP by expenditure</span></a></li> \
	<li class="toclevel-3 tocsection-6"><a href="#Examples_of_GDP_component_variables"><span class="tocnumber">2.2.2</span> <span class="toctext">Examples of GDP component variables</span></a></li> \
	</ul> \
	</li> \
	<li class="toclevel-2 tocsection-7"><a href="#Income_approach_2"><span class="tocnumber">2.3</span> <span class="toctext">Income approach</span></a></li> \
	</ul> \
	</li> \
	<li class="toclevel-1 tocsection-8"><a href="#GDP_vs_GNP"><span class="tocnumber">3</span> <span class="toctext">GDP vs GNP</span></a> \
	<ul> \
	<li class="toclevel-2 tocsection-9"><a href="#International_standards"><span class="tocnumber">3.1</span> <span class="toctext">International standards</span></a></li> \
	<li class="toclevel-2 tocsection-10"><a href="#National_measurement"><span class="tocnumber">3.2</span> <span class="toctext">National measurement</span></a></li> \
	<li class="toclevel-2 tocsection-11"><a href="#Interest_rates"><span class="tocnumber">3.3</span> <span class="toctext">Interest rates</span></a></li> \
	</ul> \
	</li> \
	<li class="toclevel-1 tocsection-12"><a href="#Adjustments_to_GDP"><span class="tocnumber">4</span> <span class="toctext">Adjustments to GDP</span></a></li> \
	<li class="toclevel-1 tocsection-13"><a href="#Cross-border_comparison"><span class="tocnumber">5</span> <span class="toctext">Cross-border comparison</span></a></li> \
	<li class="toclevel-1 tocsection-14"><a href="#Per_unit_GDP"><span class="tocnumber">6</span> <span class="toctext">Per unit GDP</span></a></li> \
	<li class="toclevel-1 tocsection-15"><a href="#Standard_of_living_and_GDP"><span class="tocnumber">7</span> <span class="toctext">Standard of living and GDP</span></a></li> \
	<li class="toclevel-1 tocsection-16"><a href="#Externalities"><span class="tocnumber">8</span> <span class="toctext">Externalities</span></a></li> \
	<li class="toclevel-1 tocsection-17"><a href="#Lists_of_countries_by_their_GDP"><span class="tocnumber">9</span> <span class="toctext">Lists of countries by their GDP</span></a> \
	<ul> \
	<li class="toclevel-2 tocsection-18"><a href="#List_of_Newer_Approaches_to_the_Measurement_of_.28Economic.29_Progress"><span class="tocnumber">9.1</span> <span class="toctext">List of Newer Approaches to the Measurement of (Economic) Progress</span></a></li> \
	</ul> \
	</li> \
	<li class="toclevel-1 tocsection-19"><a href="#See_also"><span class="tocnumber">10</span> <span class="toctext">See also</span></a></li> \
	<li class="toclevel-1 tocsection-20"><a href="#Bibliography"><span class="tocnumber">11</span> <span class="toctext">Bibliography</span></a></li> \
	<li class="toclevel-1 tocsection-21"><a href="#References"><span class="tocnumber">12</span> <span class="toctext">References</span></a></li> \
	<li class="toclevel-1 tocsection-22"><a href="#External_links"><span class="tocnumber">13</span> <span class="toctext">External links</span></a> \
	<ul> \
	<li class="toclevel-2 tocsection-23"><a href="#Global"><span class="tocnumber">13.1</span> <span class="toctext">Global</span></a></li> \
	<li class="toclevel-2 tocsection-24"><a href="#Data"><span class="tocnumber">13.2</span> <span class="toctext">Data</span></a></li> \
	<li class="toclevel-2 tocsection-25"><a href="#Articles_and_books"><span class="tocnumber">13.3</span> <span class="toctext">Articles and books</span></a></li> \
	</ul> \
	</li> \
	</ul> \
	</td> \
	</tr> \
	</table> \
	<h2><span class="editsection">[<a href="/w/index.php?title=Gross_domestic_product&amp;action=edit&amp;section=1" title="Edit section: History">edit</a>]</span> <span class="mw-headline" id="History">History</span></h2> \
	<table class="metadata plainlinks ambox mbox-small-left ambox-notice" style=""> \
	<tr> \
	<td class="mbox-image"><a href="/wiki/File:Wiki_letter_w_cropped.svg" class="image"><img alt="Wiki letter w cropped.svg" src="http://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Wiki_letter_w_cropped.svg/20px-Wiki_letter_w_cropped.svg.png" width="20" height="14" /></a></td> \
	<td class="mbox-text" style="">This section requires <a href="http://en.wikipedia.org/w/index.php?title=Gross_domestic_product&amp;action=edit" class="external text" rel="nofollow">expansion</a>.</td> \
	</tr> \
	</table> \
	<p>GDP was first developed by <a href="/wiki/Simon_Kuznets" title="Simon Kuznets">Simon Kuznets</a> for a <a href="/wiki/US_Congress" title="US Congress" class="mw-redirect">US Congress</a> report in 1934,<sup id="cite_ref-kuznets_2-0" class="reference"><a href="#cite_note-kuznets-2"><span>[</span>3<span>]</span></a></sup> who immediately said not to use it as a measure for welfare (see below under <i>limitations</i>).</p> \
	<h2><span class="editsection">[<a href="/w/index.php?title=Gross_domestic_product&amp;action=edit&amp;section=2" title="Edit section: Determining GDP">edit</a>]</span> <span class="mw-headline" id="Determining_GDP">Determining GDP</span></h2> \
	<table style="line-height:140%; font-size: 95%; margin: 0.3em 0 0.6em 0.6em; border: 1px solid #BEBEBE; background-color:#f9f9f9; clear:right; float:right;" cellpadding="0" cellspacing="0"> \
	<tr> \
	<td style="font-size: 120%; background:#ccccdd; border-bottom: 1px solid #BEBEBE; padding: 5px 5px 3px 5px;" align="center"><b><a href="/wiki/Economics" title="Economics">Economics</a></b></td> \
	</tr> \
	<tr> \
	<td style="text-align: center; background:#FFFFFF;"><a href="/wiki/File:GDP_PPP_Per_Capita_IMF_2008.svg" class="image"><img alt="GDP PPP Per Capita IMF 2008.svg" src="http://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/GDP_PPP_Per_Capita_IMF_2008.svg/200px-GDP_PPP_Per_Capita_IMF_2008.svg.png" width="200" height="91" /></a><br /></td> \
	</tr> \
	<tr> \
	<td> \
	<div class="NavFrame" style="border-style: none; padding: 0px; text-align: center; border-left: 0px; border-right: 0px; border-top: 0px; border-bottom: 0px;"> \
	<div class="NavHead" style="border-style: none; padding: 0px; background:#FFFFFF; text-align: left; font-size: 11px; height:1.9em;">&#160;&#160;<b>Economies by region</b>&#160;</div> \
	<div class="NavContent" style="border-style: none; padding: 0px; background-color:transparent; font-size: 90%; text-align: center; display:none; border-top: 1px solid #BEBEBE;"> \
	<p><a href="/wiki/Economy_of_Africa" title="Economy of Africa">Africa</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/Economy_of_North_America" title="Economy of North America">North America</a><br /> \
	<a href="/wiki/Economy_of_South_America" title="Economy of South America">South America</a>&#160;<span style="font-weight:bold;">·</span> <a href="/wiki/Economy_of_Asia" title="Economy of Asia">Asia</a><br /> \
	<a href="/wiki/Economy_of_Europe" title="Economy of Europe">Europe</a>&#160;<span style="font-weight:bold;">·</span> <a href="/wiki/Economy_of_Oceania" title="Economy of Oceania">Oceania</a><br /></p> \
	</div> \
	</div> \
	</td> \
	</tr> \
	<tr> \
	<th style="background:#ddddee; font-size: 95%; border-top: 1px solid #BEBEBE; border-bottom: 1px solid #BEBEBE; padding: 0 3px 0 3px;"><a href="/wiki/Outline_of_economics" title="Outline of economics">General categories</a></th> \
	</tr> \
	<tr> \
	<td style="font-size: 90%; padding: 0 3px 0 3px;"> \
	<center><a href="/wiki/Microeconomics" title="Microeconomics">Microeconomics</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/Macroeconomics" title="Macroeconomics">Macroeconomics</a><br /> \
	<a href="/wiki/History_of_economic_thought" title="History of economic thought">History of economic thought</a><br /> \
	<a href="/wiki/Economic_methodology" title="Economic methodology">Methodology</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/Mainstream_economics" title="Mainstream economics">Mainstream</a> &amp; <a href="/wiki/Heterodox_economics" title="Heterodox economics">heterodox</a></center> \
	</td> \
	</tr> \
	<tr> \
	<th style="background:#ddddee; font-size: 95%; border-top: 1px solid #BEBEBE; border-bottom: 1px solid #BEBEBE; padding: 0 3px 0 3px;"><a href="/wiki/JEL_classification_codes#Mathematical_and_quantitative_methods_JEL:_C_Subcategories" title="JEL classification codes">Mathematical &amp; statistical methods</a></th> \
	</tr> \
	<tr> \
	<td style="font-size: 90%; padding: 0 3px 0 3px;"> \
	<center><a href="/wiki/Mathematical_economics" title="Mathematical economics">Mathematical economics</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/Game_theory" title="Game theory">Game theory</a><br /> \
	<a href="/wiki/Mathematical_optimization#Economics" title="Mathematical optimization">Optimization</a>&#160;<span style="font-weight:bold;">·</span> <a href="/wiki/Computational_economics" title="Computational economics">Computational</a><br /> \
	<a href="/wiki/Econometrics" title="Econometrics">Econometrics</a> &#160;<span style="font-weight:bold;">·</span> <a href="/wiki/Experimental_economics" title="Experimental economics">Experimental</a><br /> \
	<a href="/wiki/Economic_statistics" title="Economic statistics">Economic statistics</a>&#160;<span style="font-weight:bold;">·</span> <a href="/wiki/National_accounting" title="National accounting" class="mw-redirect">National accounting</a></center> \
	</td> \
	</tr> \
	<tr> \
	<th style="background:#ddddee; font-size: 95%; border-top: 1px solid #BEBEBE; border-bottom: 1px solid #BEBEBE; padding: 0 3px 0 3px;"><a href="/wiki/JEL_classification_codes" title="JEL classification codes">Fields and subfields</a></th> \
	</tr> \
	<tr> \
	<td style="font-size: 90%; padding: 0 3px 0 3px;"> \
	<center> \
	<p><a href="/wiki/Behavioral_economics" title="Behavioral economics">Behavioral</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/Cultural_economics" title="Cultural economics">Cultural</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/Evolutionary_economics" title="Evolutionary economics">Evolutionary</a><br /> \
	<a href="/wiki/Economic_growth" title="Economic growth">Growth</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/Development_economics" title="Development economics">Development</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/Economic_history" title="Economic history">History</a><br /> \
	<a href="/wiki/International_economics" title="International economics">International</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/Economic_system" title="Economic system">Economic systems</a><br /> \
	<a href="/wiki/Monetary_economics" title="Monetary economics">Monetary</a> and <a href="/wiki/Financial_economics" title="Financial economics">Financial economics</a><br /> \
	<a href="/wiki/Public_economics" title="Public economics">Public</a> and <a href="/wiki/Welfare_economics" title="Welfare economics">Welfare economics</a><br /> \
	<a href="/wiki/Health_economics" title="Health economics">Health</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/Education_economics" title="Education economics">Education</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/Welfare" title="Welfare">Welfare</a><br /> \
	<a href="/wiki/Demographic_economics" title="Demographic economics">Population</a>&#160;<span style="font-weight:bold;">·</span> <a href="/wiki/Labour_economics" title="Labour economics">Labour</a>&#160;<span style="font-weight:bold;">·</span> <a href="/wiki/Managerial_economics" title="Managerial economics">Managerial</a><br /> \
	<a href="/wiki/Business_economics" title="Business economics">Business</a>&#160;<span style="font-weight:bold;">·</span> <a href="/wiki/Information_economics" title="Information economics">Information</a><br /> \
	<a href="/wiki/Industrial_organization" title="Industrial organization">Industrial organization</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/Law_and_economics" title="Law and economics">Law</a><br /> \
	<a href="/wiki/Agricultural_economics" title="Agricultural economics">Agricultural</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/Natural_resource_economics" title="Natural resource economics">Natural resource</a><br /> \
	<a href="/wiki/Environmental_economics" title="Environmental economics">Environmental</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/Ecological_economics" title="Ecological economics">Ecological</a><br /> \
	<a href="/wiki/Urban_economics" title="Urban economics">Urban</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/Rural_economics" title="Rural economics">Rural</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/Regional_science" title="Regional science">Regional</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/Economic_geography" title="Economic geography">Geography</a></p> \
	</center> \
	</td> \
	</tr> \
	<tr> \
	<td style="background:#ddddee; font-size: 95%; border-top: 1px solid #BEBEBE; border-bottom: 1px solid #BEBEBE; padding: 0 3px 0 3px;" align="center"><b><a href="/wiki/Category:Economics_lists" title="Category:Economics lists">Lists</a></b></td> \
	</tr> \
	<tr> \
	<td style="font-size: 90%; padding: 0 3px 0 3px;" align="center"> \
	<p><a href="/wiki/List_of_scholarly_journals_in_economics" title="List of scholarly journals in economics" class="mw-redirect">Journals</a> · <a href="/wiki/List_of_important_publications_in_economics" title="List of important publications in economics">Publications</a><br /> \
	<a href="/wiki/Category:Economics" title="Category:Economics">Categories</a> · <a href="/wiki/List_of_economics_topics" title="List of economics topics" class="mw-redirect">Topics</a> · <a href="/wiki/List_of_economists" title="List of economists">Economists</a><br /></p> \
	</td> \
	</tr> \
	<tr> \
	<td> \
	<div class="NavHead" style="border-style: none; padding: 0px; background:#ddddee; border-top: 1px solid #BEBEBE; text-align: center; font-size: 11px; height:1.9em;"><b><a href="/wiki/Economy" title="Economy">Economy: concept and history</a></b></div> \
	</td> \
	</tr> \
	<tr> \
	<td style="background:#ccccdd; line-height:120%; font-size: 90%; border-top: 1px solid #BEBEBE; padding: 0 3px 0 3px;" align="center"><a href="/wiki/Portal:Business_and_economics" title="Portal:Business and economics">Business and Economics Portal</a></td> \
	</tr> \
	<tr> \
	<th style="background:#ccccdd; line-height:110%; font-size: 85%; border-top: 1px solid #BEBEBE; padding: 0 3px 0 3px;" align="center"><span class="noprint plainlinks navbar" style=""><span style="">This box:</span> <span style="white-space:nowrap;word-spacing:-.12em;"><a href="/wiki/Template:Economics_sidebar" title="Template:Economics sidebar"><span style="" title="View this template">view</span></a> <span style=""><b>·</b></span> <a href="/wiki/Template_talk:Economics_sidebar" title="Template talk:Economics sidebar"><span style="" title="Discuss this template">talk</span></a> <span style=""><b>·</b></span> <a href="http://en.wikipedia.org/w/index.php?title=Template:Economics_sidebar&amp;action=edit" class="external text" rel="nofollow"><span style="" title="Edit this template">edit</span></a></span></span></th> \
	</tr> \
	</table> \
	<p>GDP can be determined in three ways, all of which should, in principle, give the same result. They are the product (or output) approach, the income approach, and the expenditure approach.</p> \
	<p>The most direct of the three is the product approach, which sums the outputs of every class of enterprise to arrive at the total. The expenditure approach works on the principle that all of the product must be bought by somebody, therefore the value of the total product must be equal to people\'s total expenditures in buying things. The income approach works on the principle that the incomes of the productive factors ("producers," colloquially) must be equal to the value of their product, and determines GDP by finding the sum of all producers\' incomes.<sup id="cite_ref-3" class="reference"><a href="#cite_note-3"><span>[</span>4<span>]</span></a></sup></p> \
	<p>Example: the expenditure method:</p> \
	<dl> \
	<dd><i>GDP = <a href="/wiki/Consumption_(economics)" title="Consumption (economics)">private consumption</a> + <a href="/wiki/Gross_private_domestic_investment" title="Gross private domestic investment">gross investment</a> + <a href="/wiki/Government_spending" title="Government spending">government spending</a> + (<a href="/wiki/Export" title="Export">exports</a> − <a href="/wiki/Import" title="Import">imports</a>)</i>, or</dd> \
	</dl> \
	<blockquote> \
	<p><img class="tex" alt="\mathrm{GDP} =\
	C + I + G + \left ( \mathrm{eX} - i \right )" src="http://upload.wikimedia.org/math/e/9/e/e9e485b82db2252fb5ab2c7b91ee624b.png" /></p> \
	</blockquote> \
	<blockquote> \
	<p><b>Note:</b> "Gross" means that GDP measures production regardless of the various uses to which that production can be put. Production can be used for immediate consumption, for investment in new fixed assets or inventories, or for replacing depreciated fixed assets. "Domestic" means that GDP measures production that takes place within the country\'s borders. In the expenditure-method equation given above, the exports-minus-imports term is necessary in order to null out expenditures on things not produced in the country (imports) and add in things produced but not sold in the country (exports).</p> \
	</blockquote> \
	<p>Economists (since <a href="/wiki/John_Maynard_Keynes" title="John Maynard Keynes">Keynes</a>) have preferred to split the general consumption term into two parts; private consumption, and <a href="/wiki/Public_sector" title="Public sector">public sector</a> (or government) spending.<sup class="Template-Fact" title="This claim needs references to reliable sources from August 2011" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Citation_needed" title="Wikipedia:Citation needed">citation needed</a></i>]</sup> Two advantages of dividing total consumption this way in theoretical <a href="/wiki/Macroeconomics" title="Macroeconomics">macroeconomics</a> are:</p> \
	<ul> \
	<li><b>Private consumption</b> is a central concern of <a href="/wiki/Welfare_economics" title="Welfare economics">welfare economics</a>. The private investment and trade portions of the economy are ultimately directed (in mainstream economic models) to increases in long-term private consumption.</li> \
	<li>If separated from <a href="/wiki/Endogeneity_(economics)" title="Endogeneity (economics)">endogenous</a> private consumption, <b>government consumption</b> can be treated as <a href="/wiki/Exogeny" title="Exogeny">exogenous</a>,<sup class="Template-Fact" title="This claim needs references to reliable sources from March 2008" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Citation_needed" title="Wikipedia:Citation needed">citation needed</a></i>]</sup> so that different government spending levels can be considered within a meaningful macroeconomic framework.</li> \
	</ul> \
	<h3><span class="editsection">[<a href="/w/index.php?title=Gross_domestic_product&amp;action=edit&amp;section=3" title="Edit section: Income approach">edit</a>]</span> <span class="mw-headline" id="Income_approach">Income approach</span></h3> \
	<p>This method measures GDP by adding incomes that firms pay households for the factors of production they hire- wages for labour, interest for capital, rent for land and profits for entrepreneurship.</p> \
	<p>The US "National Income and Expenditure Accounts" divide incomes into five categories:</p> \
	<ol> \
	<li>Wages, salaries, and supplementary labour income</li> \
	<li>Corporate profits</li> \
	<li>Interest and miscellaneous investment income</li> \
	<li>Farmers’ income</li> \
	<li>Income from non-farm unincorporated businesses</li> \
	</ol> \
	<p>These five income components sum to net domestic income at factor cost.</p> \
	<p>Two adjustments must be made to get GDP:</p> \
	<ol> \
	<li>Indirect taxes minus subsidies are added to get from factor cost to market prices.</li> \
	<li>Depreciation (or capital consumption) is added to get from net domestic product to gross domestic product.</li> \
	</ol> \
	<h3><span class="editsection">[<a href="/w/index.php?title=Gross_domestic_product&amp;action=edit&amp;section=4" title="Edit section: Expenditure approach">edit</a>]</span> <span class="mw-headline" id="Expenditure_approach">Expenditure approach</span></h3> \
	<p>In economics, most things produced are produced for sale, and sold. Therefore, measuring the total expenditure of money used to buy things is a way of measuring production. This is known as the expenditure method of calculating GDP. Note that if you knit yourself a sweater, it is production but does not get counted as GDP because it is never sold. Sweater-knitting is a small part of the economy, but if one counts some major activities such as child-rearing (generally unpaid) as production, GDP ceases to be an accurate indicator of production. Similarly, if there is a long term shift from non-market provision of services (for example cooking, cleaning, child rearing, do-it yourself repairs) to market provision of services, then this trend toward increased market provision of services may mask a dramatic decrease in actual domestic production, resulting in overly optimistic and inflated reported GDP. This is particularly a problem for economies which have shifted from production economies to <a href="/wiki/Service_economy" title="Service economy">service economies</a>.</p> \
	<h4><span class="editsection">[<a href="/w/index.php?title=Gross_domestic_product&amp;action=edit&amp;section=5" title="Edit section: Components of GDP by expenditure">edit</a>]</span> <span class="mw-headline" id="Components_of_GDP_by_expenditure">Components of GDP by expenditure</span></h4> \
	<div class="thumb tright"> \
	<div class="thumbinner" style="width:352px;"><a href="/wiki/File:GDP_Categories_-_United_States.png" class="image"><img alt="" src="http://upload.wikimedia.org/wikipedia/en/thumb/f/f6/GDP_Categories_-_United_States.png/350px-GDP_Categories_-_United_States.png" width="350" height="263" class="thumbimage" /></a> \
	<div class="thumbcaption"> \
	<div class="magnify"><a href="/wiki/File:GDP_Categories_-_United_States.png" class="internal" title="Enlarge"><img src="http://bits.wikimedia.org/skins-1.17/common/images/magnify-clip.png" width="15" height="11" alt="" /></a></div> \
	Components of U.S. GDP</div> \
	</div> \
	</div> \
	<p><b>GDP (Y)</b> is a sum of <b>Consumption (C)</b>, <b>Investment (I)</b>, <b>Government Spending (G)</b> and <b>Net Exports (X – M)</b>.</p> \
	<dl> \
	<dd><b>Y</b> = <b>C</b> + <b>I</b> + <b>G</b> + <b>(X − M)</b></dd> \
	</dl> \
	<p>Here is a description of each GDP component:</p> \
	<ul> \
	<li><b>C (consumption)</b> is normally the largest GDP component in the economy, consisting of private (<a href="/wiki/Household_final_consumption_expenditure" title="Household final consumption expenditure">household final consumption expenditure</a>) in the economy. These personal expenditures fall under one of the following categories: <a href="/wiki/Durable_goods" title="Durable goods" class="mw-redirect">durable goods</a>, non-durable goods, and services. Examples include food, rent, jewelry, gasoline, and medical expenses but does not include the purchase of new housing.</li> \
	<li><b>I (investment)</b> includes business investment in equipments for example and does not include exchanges of existing assets. Examples include construction of a new <a href="/wiki/Mining" title="Mining">mine</a>, purchase of software, or purchase of machinery and equipment for a factory. Spending by households (not government) on new houses is also included in Investment. In contrast to its colloquial meaning, \'Investment\' in GDP does not mean purchases of <a href="/wiki/Financial_market" title="Financial market">financial products</a>. Buying financial products is classed as \'<a href="/wiki/Saving" title="Saving">saving</a>\', as opposed to <b>investment</b>. This avoids double-counting: if one buys shares in a company, and the company uses the money received to buy plant, equipment, etc., the amount will be counted toward GDP when the company spends the money on those things; to also count it when one gives it to the company would be to count two times an amount that only corresponds to one group of products. Buying <a href="/wiki/Bond_(finance)" title="Bond (finance)">bonds</a> or <a href="/wiki/Stock" title="Stock">stocks</a> is a swapping of <a href="/wiki/Deed" title="Deed">deeds</a>, a transfer of claims on future production, not directly an expenditure on products.</li> \
	<li><b>G (government spending)</b> is the sum of <a href="/wiki/Government_spending" title="Government spending">government expenditures</a> on <a href="/wiki/Final_goods" title="Final goods">final goods</a> and services. It includes salaries of <a href="/wiki/Public_servants" title="Public servants" class="mw-redirect">public servants</a>, purchase of weapons for the military, and any investment expenditure by a government. It does not include any <a href="/wiki/Transfer_payment" title="Transfer payment">transfer payments</a>, such as <a href="/wiki/Social_security" title="Social security">social security</a> or <a href="/wiki/Unemployment_benefits" title="Unemployment benefits">unemployment benefits</a>.</li> \
	<li><b>X (exports)</b> represents gross exports. GDP captures the amount a country produces, including goods and services produced for other nations\' consumption, therefore exports are added.</li> \
	<li><b>M (imports)</b> represents gross imports. Imports are subtracted since imported goods will be included in the terms <b>G</b>, <b>I</b>, or <b>C</b>, and must be deducted to avoid counting foreign <a href="/wiki/Supply_and_demand" title="Supply and demand">supply</a> as domestic.</li> \
	</ul> \
	<p>A fully equivalent definition is that <b>GDP (Y)</b> is the sum of <b><a href="/wiki/Final_consumption_expenditure" title="Final consumption expenditure">final consumption expenditure</a> (FCE)</b>, <b><a href="/wiki/Gross_fixed_capital_formation" title="Gross fixed capital formation">gross capital formation</a> (GCF)</b>, and <b>net exports (X – M)</b>.</p> \
	<dl> \
	<dd><b>Y</b> = <b>FCE</b> + <b>GCF</b>+ <b>(X − M)</b></dd> \
	</dl> \
	<p>FCE can then be further broken down by three sectors (households, governments and non-profit institutions serving households) and GCF by five sectors (non-financial corporations, financial corporations, households, governments and <a href="http://epp.eurostat.ec.europa.eu/statistics_explained/index.php/Glossary:Non-profit_institutions_serving_households_(NPISH)" class="external text" rel="nofollow">non-profit institutions serving households</a>). The advantage of this second definition is that expenditure is systematically broken down, firstly, by type of final use (final consumption or capital formation) and, secondly, by sectors making the expenditure, whereas the first definition partly follows a mixed delimitation concept by type of final use and sector.</p> \
	<p>Note that <b>C</b>, <b>G</b>, and <b>I</b> are expenditures on <a href="/wiki/Final_goods" title="Final goods">final goods</a> and services; expenditures on intermediate goods and services do not count. (Intermediate goods and services are those used by businesses to produce other goods and services within the accounting year.<sup id="cite_ref-4" class="reference"><a href="#cite_note-4"><span>[</span>5<span>]</span></a></sup> )</p> \
	<p>According to the U.S. Bureau of Economic Analysis, which is responsible for calculating the national accounts in the United States, "In general, the source data for the expenditures components are considered more reliable than those for the income components [see income method, below]."<sup id="cite_ref-5" class="reference"><a href="#cite_note-5"><span>[</span>6<span>]</span></a></sup></p> \
	<h4><span class="editsection">[<a href="/w/index.php?title=Gross_domestic_product&amp;action=edit&amp;section=6" title="Edit section: Examples of GDP component variables">edit</a>]</span> <span class="mw-headline" id="Examples_of_GDP_component_variables">Examples of GDP component variables</span></h4> \
	<p><b>C</b>, <b>I</b>, <b>G</b>, and <b>NX</b>(net exports): If a person spends money to renovate a hotel to increase occupancy rates, the spending represents private investment, but if he buys shares in a consortium to execute the renovation, it is <a href="/wiki/Saving" title="Saving">saving</a>. The former is included when <a href="/wiki/Measuring_GDP" title="Measuring GDP">measuring GDP</a> (in <b>I</b>), the latter is not. However, when the consortium conducted its own expenditure on renovation, that expenditure would be included in GDP.</p> \
	<p>If a hotel is a private home, spending for renovation would be measured as <b>c</b>onsumption, but if a government agency converts the hotel into an office for civil servants, the spending would be included in the public sector spending, or <b>G</b>.</p> \
	<p>If the renovation involves the purchase of a <a href="/wiki/Chandelier" title="Chandelier">chandelier</a> from abroad, that spending would be counted as <b>C</b>, <b>G</b>, or <b>I</b> (depending on whether a private individual, the government, or a business is doing the renovation), but then counted again as an import and subtracted from the GDP so that GDP counts only goods produced within the country.</p> \
	<p>If a domestic producer is paid to make the chandelier for a foreign hotel, the payment would not be counted as <b>C</b>, <b>G</b>, or <b>I</b>, but would be counted as an export.</p> \
	<div class="thumb tright"> \
	<div class="thumbinner" style="width:202px;"><a href="/wiki/File:Gdp_real_growth_rate_2007_CIA_Factbook.PNG" class="image"><img alt="" src="http://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Gdp_real_growth_rate_2007_CIA_Factbook.PNG/200px-Gdp_real_growth_rate_2007_CIA_Factbook.PNG" width="200" height="93" class="thumbimage" /></a> \
	<div class="thumbcaption"> \
	<div class="magnify"><a href="/wiki/File:Gdp_real_growth_rate_2007_CIA_Factbook.PNG" class="internal" title="Enlarge"><img src="http://bits.wikimedia.org/skins-1.17/common/images/magnify-clip.png" width="15" height="11" alt="" /></a></div> \
	<a href="/wiki/List_of_countries_by_GDP_(real)_growth_rate" title="List of countries by GDP (real) growth rate" class="mw-redirect">GDP real growth rates</a> for 2010</div> \
	</div> \
	</div> \
	<h3><span class="editsection">[<a href="/w/index.php?title=Gross_domestic_product&amp;action=edit&amp;section=7" title="Edit section: Income approach">edit</a>]</span> <span class="mw-headline" id="Income_approach_2">Income approach</span></h3> \
	<p>Another way of measuring GDP is to measure total income. If GDP is calculated this way it is sometimes called Gross Domestic Income (GDI), or GDP(I). GDI should provide the same amount as the expenditure method described above. (By definition, GDI = GDP. In practice, however, measurement errors will make the two figures slightly off when reported by national statistical agencies.)</p> \
	<p>Total income can be subdivided according to various schemes, leading to various formulae for GDP measured by the income approach. A common one is:</p> \
	<dl> \
	<dd><i>GDP = <a href="/wiki/Compensation_of_employees" title="Compensation of employees">compensation of employees</a> + <a href="/wiki/Gross_operating_surplus" title="Gross operating surplus">gross operating surplus</a> + <a href="/wiki/Gross_mixed_income" title="Gross mixed income" class="mw-redirect">gross mixed income</a> + taxes less subsidies on production and imports</i></dd> \
	<dd><b>GDP</b> = <b>COE</b> + <b>GOS</b> + <b>GMI</b> + <b>T<sub>P &amp; M</sub></b> – <b>S<sub>P &amp; M</sub></b></dd> \
	</dl> \
	<ul> \
	<li><b>Compensation of employees</b> (COE) measures the total remuneration to employees for work done. It includes wages and salaries, as well as employer contributions to <a href="/wiki/Social_security" title="Social security">social security</a> and other such programs.</li> \
	<li><b>Gross operating surplus</b> (GOS) is the surplus due to owners of incorporated businesses. Often called <a href="/wiki/Profit_(accounting)" title="Profit (accounting)">profits</a>, although only a subset of total costs are subtracted from <a href="/wiki/Gross_output" title="Gross output">gross output</a> to calculate GOS.</li> \
	<li><b>Gross mixed income</b> (GMI) is the same measure as GOS, but for unincorporated businesses. This often includes most small businesses.</li> \
	</ul> \
	<p>The sum of <b>COE</b>, <b>GOS</b> and <b>GMI</b> is called total factor income; it is the income of all of the factors of production in society. It measures the value of GDP at factor (basic) prices. The difference between basic prices and final prices (those used in the expenditure calculation) is the total taxes and subsidies that the government has levied or paid on that production. So adding taxes less subsidies on production and imports converts GDP at <a href="/wiki/Factor_cost" title="Factor cost">factor cost</a> to GDP(I).</p> \
	<p>Total factor income is also sometimes expressed as:</p> \
	<dl> \
	<dd><i>Total factor income = Employee compensation + Corporate profits + Proprieter\'s income + Rental income + Net interest</i><sup id="cite_ref-6" class="reference"><a href="#cite_note-6"><span>[</span>7<span>]</span></a></sup></dd> \
	</dl> \
	<p>Yet another formula for GDP by the income method is:<sup class="Template-Fact" title="This claim needs references to reliable sources from March 2009" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Citation_needed" title="Wikipedia:Citation needed">citation needed</a></i>]</sup></p> \
	<dl> \
	<dd><span class="texhtml"><i>G</i><i>D</i><i>P</i> = <i>R</i> + <i>I</i> + <i>P</i> + <i>S</i><i>A</i> + <i>W</i></span></dd> \
	</dl> \
	<p>where R&#160;: rents<br /> \
	I&#160;: interests<br /> \
	P&#160;: profits<br /> \
	SA&#160;: statistical adjustments (corporate income taxes, dividends, undistributed corporate profits)<br /> \
	W&#160;: wages<br /> \
	Note the mnemonic, "ripsaw".</p> \
	<p>A "production boundary" that delimits what will be counted as GDP.</p> \
	<blockquote style="font-size:94%"> \
	<p>"One of the fundamental questions that must be addressed in preparing the national economic accounts is how to define the production boundary–that is, what parts of the myriad human activities are to be included in or excluded from the measure of the economic production."<sup id="cite_ref-7" class="reference"><a href="#cite_note-7"><span>[</span>8<span>]</span></a></sup></p> \
	</blockquote> \
	<p>All output for market is at least in theory included within the boundary. Market output is defined as that which is sold for "economically significant" prices; economically significant prices are "prices which have a significant influence on the amounts producers are willing to supply and purchasers wish to buy."<sup id="cite_ref-8" class="reference"><a href="#cite_note-8"><span>[</span>9<span>]</span></a></sup> An exception is that illegal goods and services are often excluded even if they are sold at economically significant prices (Australia and the United States exclude them).</p> \
	<p>This leaves non-market output. It is partly excluded and partly included. First, "natural processes without human involvement or direction" are excluded.<sup id="cite_ref-9" class="reference"><a href="#cite_note-9"><span>[</span>10<span>]</span></a></sup> Also, there must be a person or institution that owns or is entitled to compensation for the product. An example of what is included and excluded by these criteria is given by the United States\' national accounts agency: "the growth of trees in an uncultivated forest is not included in production, but the harvesting of the trees from that forest is included."<sup id="cite_ref-10" class="reference"><a href="#cite_note-10"><span>[</span>11<span>]</span></a></sup></p> \
	<p>Within the limits so far described, the boundary is further constricted by "functional considerations."<sup id="cite_ref-11" class="reference"><a href="#cite_note-11"><span>[</span>12<span>]</span></a></sup> The Australian Bureau for Statistics explains this: "The national accounts are primarily constructed to assist governments and others to make market-based macroeconomic policy decisions, including analysis of markets and factors affecting market performance, such as inflation and unemployment." Consequently, production that is, according to them, "relatively independent and isolated from markets," or "difficult to value in an economically meaningful way" [i.e., difficult to put a price on] is excluded.<sup id="cite_ref-12" class="reference"><a href="#cite_note-12"><span>[</span>13<span>]</span></a></sup> Thus excluded are services provided by people to members of their own families free of charge, such as child rearing, meal preparation, cleaning, transportation, entertainment of family members, emotional support, care of the elderly.<sup id="cite_ref-13" class="reference"><a href="#cite_note-13"><span>[</span>14<span>]</span></a></sup> Most other production for own (or one\'s family\'s) use is also excluded, with two notable exceptions which are given in the list later in this section.</p> \
	<p>Nonmarket outputs that <i>are</i> included within the boundary are listed below. Since, by definition, they do not have a market price, the compilers of GDP must <i>impute</i> a value to them, usually either the cost of the goods and services used to produce them, or the value of a similar item that is sold on the market.</p> \
	<ul> \
	<li>Goods and services provided by governments and non-profit organisations free of charge or for economically insignificant prices are included. The value of these goods and services is estimated as equal to their cost of production. This ignores the consumer surplus generated by an efficient and effective government supplied infrastructure. For example, government-provided clean water confers substantial benefits above its cost. Ironically, lack of such infrastructure which would result in higher water prices (and probably higher hospital and medication expenditures) would be reflected as a higher GDP. This may also cause a bias that mistakenly favors inefficient privatizations since some of the consumer surplus from privatized entities\' sale of goods and services are indeed reflected in GDP.<sup id="cite_ref-Product_Accounts_page_2-4_14-0" class="reference"><a href="#cite_note-Product_Accounts_page_2-4-14"><span>[</span>15<span>]</span></a></sup></li> \
	<li>Goods and services produced for own-use by businesses are attempted to be included. An example of this kind of production would be a machine constructed by an engineering firm for use in its own plant.</li> \
	<li>Renovations and upkeep by an individual to a home that she owns and occupies are included. The value of the upkeep is estimated as the rent that she could charge for the home if she did not occupy it herself. This is the largest item of production for own use by an individual (as opposed to a business) that the compilers include in GDP.<sup id="cite_ref-Product_Accounts_page_2-4_14-1" class="reference"><a href="#cite_note-Product_Accounts_page_2-4-14"><span>[</span>15<span>]</span></a></sup> If the measure uses historical or book prices for real estate, this will grossly underestimate the value of the rent in real estate markets which have experienced significant price increases (or economies with general inflation). Furthermore, depreciation schedules for houses often accelerate the accounted depreciation relative to actual depreciation (a well built house can be lived in for several hundred years – a very long time after it has been fully depreciated). In summary, this is likely to grossly underestimate the value of existing housing stock on consumers\' actual consumption or income.</li> \
	<li>Agricultural production for consumption by oneself or one\'s household is included.</li> \
	<li>Services (such as chequeing-account maintenance and services to borrowers) provided by banks and other financial institutions without charge or for a fee that does not reflect their full value have a value imputed to them by the compilers and are included. The financial institutions provide these services by giving the customer a less advantageous interest rate than they would if the services were absent; the value imputed to these services by the compilers is the difference between the interest rate of the account with the services and the interest rate of a similar account that does not have the services. According to the United States Bureau for Economic Analysis, this is one of the largest imputed items in the GDP.<sup id="cite_ref-15" class="reference"><a href="#cite_note-15"><span>[</span>16<span>]</span></a></sup></li> \
	</ul> \
	<h2><span class="editsection">[<a href="/w/index.php?title=Gross_domestic_product&amp;action=edit&amp;section=8" title="Edit section: GDP vs GNP">edit</a>]</span> <span class="mw-headline" id="GDP_vs_GNP">GDP vs GNP</span></h2> \
	<p>GDP can be contrasted with <a href="/wiki/Gross_national_product" title="Gross national product">gross national product</a> (GNP) or <a href="/wiki/Gross_National_Income" title="Gross National Income" class="mw-redirect">gross national income</a> (GNI). The difference is that GDP defines its scope according to location, while GNP defines its scope according to ownership. In a global context, <a href="/wiki/Gross_world_product" title="Gross world product">world GDP and world GNP</a> are therefore equivalent terms.</p> \
	<p>GDP is product produced within a country\'s borders; GNP is product produced by enterprises owned by a country\'s citizens. The two would be the same if all of the productive enterprises in a country were owned by its own citizens, and those citizens did not own productive enterprises in any other countries. In practice, however, foreign ownership makes GDP and GNP non-identical. Production within a country\'s borders, but by an enterprise owned by somebody outside the country, counts as part of its GDP but not its GNP; on the other hand, production by an enterprise located outside the country, but owned by one of its citizens, counts as part of its GNP but not its GDP.</p> \
	<p>To take the United States as an example, the U.S.\'s GNP is the value of output produced by American-owned firms, regardless of where the firms are located. Similarly, if a country becomes increasingly in debt, and spends large amounts of income servicing this debt this will be reflected in a decreased GNI but not a decreased GDP. Similarly, if a country sells off its resources to entities outside their country this will also be reflected over time in decreased GNI, but not decreased GDP. This would make the use of GDP more attractive for politicians in countries with increasing national debt and decreasing assets.</p> \
	<p>Gross national income (GNI) equals GDP plus income receipts from the rest of the world minus income payments to the rest of the world.<sup id="cite_ref-16" class="reference"><a href="#cite_note-16"><span>[</span>17<span>]</span></a></sup></p> \
	<p>In 1991, the United States switched from using GNP to using GDP as its primary measure of production.<sup id="cite_ref-17" class="reference"><a href="#cite_note-17"><span>[</span>18<span>]</span></a></sup> The relationship between United States GDP and GNP is shown in table 1.7.5 of the <i><a href="/wiki/National_Income_and_Product_Accounts" title="National Income and Product Accounts">National Income and Product Accounts</a></i>.<sup id="cite_ref-18" class="reference"><a href="#cite_note-18"><span>[</span>19<span>]</span></a></sup></p> \
	<h3><span class="editsection">[<a href="/w/index.php?title=Gross_domestic_product&amp;action=edit&amp;section=9" title="Edit section: International standards">edit</a>]</span> <span class="mw-headline" id="International_standards">International standards</span></h3> \
	<p>The international standard for measuring GDP is contained in the book <i><a href="/wiki/United_Nations_System_of_National_Accounts_(UNSNA)" title="United Nations System of National Accounts (UNSNA)" class="mw-redirect">System of National Accounts</a></i> (1993), which was prepared by representatives of the <a href="/wiki/International_Monetary_Fund" title="International Monetary Fund">International Monetary Fund</a>, <a href="/wiki/European_Union" title="European Union">European Union</a>, <a href="/wiki/Organization_for_Economic_Co-operation_and_Development" title="Organization for Economic Co-operation and Development" class="mw-redirect">Organization for Economic Co-operation and Development</a>, <a href="/wiki/United_Nations" title="United Nations">United Nations</a> and <a href="/wiki/World_Bank" title="World Bank">World Bank</a>. The publication is normally referred to as SNA93 to distinguish it from the previous edition published in 1968 (called SNA68) <sup id="cite_ref-Central_Bureau_of_Statistics_19-0" class="reference"><a href="#cite_note-Central_Bureau_of_Statistics-19"><span>[</span>20<span>]</span></a></sup></p> \
	<p>SNA93 provides a set of rules and procedures for the measurement of national accounts. The standards are designed to be flexible, to allow for differences in local statistical needs and conditions.</p> \
	<table class="metadata plainlinks ambox mbox-small-left ambox-notice" style=""> \
	<tr> \
	<td class="mbox-image"><a href="/wiki/File:Wiki_letter_w_cropped.svg" class="image"><img alt="Wiki letter w cropped.svg" src="http://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Wiki_letter_w_cropped.svg/20px-Wiki_letter_w_cropped.svg.png" width="20" height="14" /></a></td> \
	<td class="mbox-text" style="">This section requires <a href="http://en.wikipedia.org/w/index.php?title=Gross_domestic_product&amp;action=edit" class="external text" rel="nofollow">expansion</a>.</td> \
	</tr> \
	</table> \
	<h3><span class="editsection">[<a href="/w/index.php?title=Gross_domestic_product&amp;action=edit&amp;section=10" title="Edit section: National measurement">edit</a>]</span> <span class="mw-headline" id="National_measurement">National measurement</span></h3> \
	<p>Within each country GDP is normally measured by a national government statistical agency, as private sector organizations normally do not have access to the information required (especially information on expenditure and production by governments).</p> \
	<div class="rellink relarticle mainarticle">Main article: <a href="/wiki/National_agencies_responsible_for_GDP_measurement" title="National agencies responsible for GDP measurement">National agencies responsible for GDP measurement</a></div> \
	<h3><span class="editsection">[<a href="/w/index.php?title=Gross_domestic_product&amp;action=edit&amp;section=11" title="Edit section: Interest rates">edit</a>]</span> <span class="mw-headline" id="Interest_rates">Interest rates</span></h3> \
	<p>Net interest expense is a <a href="/wiki/Transfer_payment" title="Transfer payment">transfer payment</a> in all sectors except the financial sector. Net interest expenses in the financial sector are seen as <a href="/wiki/Mass_production" title="Mass production">production</a> and <a href="/wiki/Value_added" title="Value added">value added</a> and are added to GDP.</p> \
	<h2><span class="editsection">[<a href="/w/index.php?title=Gross_domestic_product&amp;action=edit&amp;section=12" title="Edit section: Adjustments to GDP">edit</a>]</span> <span class="mw-headline" id="Adjustments_to_GDP">Adjustments to GDP</span></h2> \
	<p>When comparing GDP figures from one year to another, it is desirable to compensate for changes in the value of money – i.e., for the effects of inflation or deflation. The raw GDP figure as given by the equations above is called the <b>nominal, or historical, or current, GDP</b>. To make it more meaningful for year-to-year comparisons, it may be multiplied by the ratio between the value of money in the year the GDP was measured and the value of money in some base year. For example, suppose a country\'s GDP in 1990 was $100 million and its GDP in 2000 was $300 million; but suppose that inflation had halved the value of its currency over that period. To meaningfully compare its 2000 GDP to its 1990 GDP we could multiply the 2000 GDP by one-half, to make it relative to 1990 as a base year. The result would be that the 2000 GDP equals $300 million × one-half = $150 million, <i>in 1990 monetary terms.</i> We would see that the country\'s GDP had, realistically, increased 50 percent over that period, not 200 percent, as it might appear from the raw GDP data. The GDP adjusted for changes in money-value in this way is called the real, or constant, GDP.</p> \
	<p>The factor used to convert GDP from current to constant values in this way is called the <i><a href="/wiki/GDP_deflator" title="GDP deflator">GDP deflator</a></i>. Unlike the <a href="/wiki/Consumer_price_index" title="Consumer price index">Consumer price index</a>, which measures inflation or deflation in the price of household consumer goods, the GDP deflator measures changes in the prices all domestically produced goods and services in an economy–including investment goods and government services, as well as household consumption goods.<sup id="cite_ref-20" class="reference"><a href="#cite_note-20"><span>[</span>21<span>]</span></a></sup></p> \
	<p>Constant-GDP figures allow us to calculate a GDP growth rate, which tells us how much a country\'s production has increased (or decreased, if the growth rate is negative) compared to the previous year.</p> \
	<dl> \
	<dd>Real GDP growth rate for year <i>n</i> = [(Real GDP in year <i>n</i>) − (Real GDP in year <i>n</i> − 1)] / (Real GDP in year <i>n</i> − 1)</dd> \
	</dl> \
	<p>Another thing that it may be desirable to compensate for is population growth. If a country\'s GDP doubled over some period but its population tripled, the increase in GDP may not be deemed such a great accomplishment: the average person in the country is producing less than they were before. <i>Per-capita GDP</i> is the measure compensated for population growth.</p> \
	<h2><span class="editsection">[<a href="/w/index.php?title=Gross_domestic_product&amp;action=edit&amp;section=13" title="Edit section: Cross-border comparison">edit</a>]</span> <span class="mw-headline" id="Cross-border_comparison">Cross-border comparison</span></h2> \
	<div class="thumb tright"> \
	<div class="thumbinner" style="width:222px;"><a href="/w/index.php?title=File:GDP_PPP_.pdf&amp;page=1" class="image"><img alt="" src="http://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/GDP_PPP_.pdf/page1-220px-GDP_PPP_.pdf.jpg" width="220" height="156" class="thumbimage" /></a> \
	<div class="thumbcaption"> \
	<div class="magnify"><a href="/wiki/File:GDP_PPP_.pdf" class="internal" title="Enlarge"><img src="http://bits.wikimedia.org/skins-1.17/common/images/magnify-clip.png" width="15" height="11" alt="" /></a></div> \
	GDP (PPP) share of world / per capita per nation 1980–2015, Source: International Monetary Fund (WEO April 2011)</div> \
	</div> \
	</div> \
	<p>The level of GDP in different countries may be compared by converting their value in national currency according to <i>either</i> the current currency exchange rate, or the purchase power parity exchange rate.</p> \
	<ul> \
	<li><b>Current currency exchange rate</b> is the exchange rate in the international <a href="/wiki/Currency_market" title="Currency market" class="mw-redirect">currency market</a>.</li> \
	<li><b>Purchasing power parity exchange rate</b> is the exchange rate based on the <a href="/wiki/Purchasing_power_parity" title="Purchasing power parity">purchasing power parity</a> (PPP) of a currency relative to a selected standard (usually the <a href="/wiki/United_States_dollar" title="United States dollar">United States dollar</a>). This is a comparative (and theoretical) exchange rate, the only way to directly realize this rate is to sell an entire <a href="/wiki/CPI" title="CPI" class="mw-redirect">CPI</a> basket in one country, convert the cash at the currency market rate &amp; then rebuy that same basket of goods in the other country (with the converted cash). Going from country to country, the distribution of prices within the basket will vary; typically, non-tradable purchases will consume a greater proportion of the basket\'s total cost in the higher GDP country, per the <a href="/wiki/Balassa-Samuelson_effect" title="Balassa-Samuelson effect" class="mw-redirect">Balassa-Samuelson effect</a>.</li> \
	</ul> \
	<p>The ranking of countries may differ significantly based on which method is used.</p> \
	<ul> \
	<li>The <i>current exchange rate method</i> converts the value of goods and services using global currency <a href="/wiki/Exchange_rates" title="Exchange rates" class="mw-redirect">exchange rates</a>. The method can offer better indications of a country\'s international purchasing power and relative economic strength. For instance, if 10% of GDP is being spent on buying hi-tech foreign <a href="/wiki/Weapon" title="Weapon">arms</a>, the number of weapons purchased is entirely governed by <i>current exchange rates</i>, since arms are a traded product bought on the international market. There is no meaningful \'local\' price distinct from the international price for high technology goods.</li> \
	<li>The <i>purchasing power parity method</i> accounts for the relative effective domestic purchasing power of the average producer or consumer within an economy. The method can provide a better indicator of the living standards of less developed countries, because it compensates for the weakness of local currencies in the international markets. For example, India ranks 11th by nominal GDP, but fourth by PPP. The PPP method of GDP conversion is more relevant to non-traded goods and services.</li> \
	</ul> \
	<p>There is a clear pattern of the <i>purchasing power parity method</i> decreasing the disparity in GDP between high and low income (GDP) countries, as compared to the <i>current exchange rate method</i>. This finding is called the <a href="/wiki/Penn_effect" title="Penn effect">Penn effect</a>.</p> \
	<p>For more information, see <a href="/wiki/Measures_of_national_income_and_output" title="Measures of national income and output">Measures of national income and output</a>.</p> \
	<h2><span class="editsection">[<a href="/w/index.php?title=Gross_domestic_product&amp;action=edit&amp;section=14" title="Edit section: Per unit GDP">edit</a>]</span> <span class="mw-headline" id="Per_unit_GDP">Per unit GDP</span></h2> \
	<p>GDP is an aggregate figure which does not account for differing sizes of nations. Therefore, GDP can be stated as <i>GDP per capita</i> (per person) in which total GDP is divided by the resident population on a given date, <i>GDP per citizen</i> where total GDP is divided by the numbers of citizens residing in the country on a given date, and less commonly GDP per unit of a resource input, such as <i>GDP per GJ of energy</i> or <a href="/wiki/Gross_domestic_product_per_barrel" title="Gross domestic product per barrel">Gross domestic product per barrel</a>. <i>GDP per citizen</i> in the above case is pretty similar to <i>GDP per capita</i> in most nations, however, in nations with very high proportions of temporary foreign workers like in Persian Gulf nations, the two figures can be vastly different.</p> \
	<h2><span class="editsection">[<a href="/w/index.php?title=Gross_domestic_product&amp;action=edit&amp;section=15" title="Edit section: Standard of living and GDP">edit</a>]</span> <span class="mw-headline" id="Standard_of_living_and_GDP">Standard of living and GDP</span></h2> \
	<p>GDP per capita is not a measurement of the <a href="/wiki/Standard_of_living" title="Standard of living">standard of living</a> in an <a href="/wiki/Economic_system" title="Economic system">economy</a>. However, it is often used as such an indicator, on the rationale that all citizens would benefit from their country\'s increased economic production. Similarly, GDP per capita is not a measure of personal income. GDP may increase while <a href="/wiki/Real_income" title="Real income">real incomes</a> for the majority decline. The major advantage of GDP per capita as an indicator of standard of living is that it is measured frequently, widely, and consistently. It is measured frequently in that most countries provide information on GDP on a quarterly basis, allowing trends to be seen quickly. It is measured widely in that some measure of GDP is available for almost every <a href="/wiki/Country" title="Country">country</a> in the <a href="/wiki/World" title="World">world</a>, allowing inter-country comparisons. It is measured consistently in that the technical definition of GDP is relatively consistent among countries.</p> \
	<p>The major disadvantage is that it is not a measure of standard of living. GDP is intended to be a measure of total national economic activity— a separate concept.</p> \
	<p>The argument for using GDP as a standard-of-living <a href="/wiki/Proxy_(statistics)" title="Proxy (statistics)">proxy</a> is not that it is a good indicator of the <a href="http://en.wiktionary.org/wiki/absolute" class="extiw" title="wiktionary:absolute">absolute</a> level of standard of living, but that living standards tend to move with per-capita GDP, so that <i>changes</i> in living standards are readily detected through changes in GDP.</p> \
	<p>Proponents of GDP as a metric of social well being argue that it is a value neutral measure and expresses what we can do, not what we should do. This is compatible with the fact that different people have different preferences and different opinions on what well-being is. Competing measures like GPI define well-being to mean things that the definers ideologically support. Therefore, they cannot function as the goals of a plural society. Moreover, they are more vulnerable to political manipulation.<sup id="cite_ref-21" class="reference"><a href="#cite_note-21"><span>[</span>22<span>]</span></a></sup></p> \
	<p><br /></p> \
	<h2><span class="editsection">[<a href="/w/index.php?title=Gross_domestic_product&amp;action=edit&amp;section=16" title="Edit section: Externalities">edit</a>]</span> <span class="mw-headline" id="Externalities">Externalities</span></h2> \
	<p>GDP is widely used by economists to gauge economic recession and recovery and an economies general monetary ability address externalites. Its not meant to measure externalities. Its serves as a general metric for a nominal monetary <a href="/wiki/Standard_of_living" title="Standard of living">standard of living</a> and is not adjusted for costs of living within a region. GDP is a neutral measure which merely shows an economy\'s general ability to pay for externalities such as social and environmental concerns.<sup id="cite_ref-22" class="reference"><a href="#cite_note-22"><span>[</span>23<span>]</span></a></sup> Examples of externalities include:</p> \
	<ul> \
	<li><b>Wealth distribution</b> – GDP does not account for variances in incomes of various demographic groups. See <a href="/wiki/Income_inequality_metrics" title="Income inequality metrics">income inequality metrics</a> for discussion of a variety of inequality-based economic measures.</li> \
	<li><b>Non-market transactions</b>–GDP excludes activities that are not provided through the market, such as household production and volunteer or unpaid services. As a result, GDP is understated. Unpaid work conducted on <a href="/wiki/FOSS" title="FOSS" class="mw-redirect">Free and Open Source Software</a> (such as <a href="/wiki/Linux" title="Linux">Linux</a>) contribute nothing to GDP, but it was <a href="/wiki/Linux#Development" title="Linux">estimated</a> that it would have cost more than a billion US dollars for a commercial company to develop. Also, if Free and Open Source Software became identical to its <a href="/wiki/Proprietary_software" title="Proprietary software">proprietary software</a> counterparts, and the nation producing the propriety software stops buying proprietary software and switches to Free and Open Source Software, then the GDP of this nation would reduce, however there would be no reduction in economic production or standard of living. The work of New Zealand economist <a href="/wiki/Marilyn_Waring" title="Marilyn Waring">Marilyn Waring</a> has highlighted that if a concerted attempt to factor in unpaid work were made, then it would in part undo the injustices of unpaid (and in some cases, slave) labour, and also provide the political transparency and accountability necessary for democracy. Shedding some doubt on this claim, however, is the theory that won economist <a href="/wiki/Douglass_North" title="Douglass North">Douglass North</a> the Nobel Prize in 1993.<sup class="Template-Fact" title="This claim needs references to reliable sources from July 2011" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Citation_needed" title="Wikipedia:Citation needed">citation needed</a></i>]</sup> North argued that the encouragement of private invention and enterprise due to the creation and strengthening of the patent system became the fundamental catalyst behind the Industrial Revolution in England.</li> \
	<li><b>Underground economy</b>–Official GDP estimates may not take into account the <a href="/wiki/Underground_economy" title="Underground economy" class="mw-redirect">underground economy</a>, in which transactions contributing to production, such as illegal trade and tax-avoiding activities, are unreported, causing GDP to be underestimated.</li> \
	<li><b>Asset Value</b>–GDP does not take into account the value of all assets in an economy. This is akin to ignoring a company\'s balance sheet, and judging it solely on the basis of its income statement.</li> \
	<li><b>Non-monetary economy</b>–GDP omits economies where no money comes into play at all, resulting in inaccurate or abnormally low GDP figures. For example, in countries with major business transactions occurring informally, portions of local economy are not easily registered. <a href="/wiki/Barter_(economics)" title="Barter (economics)" class="mw-redirect">Bartering</a> may be more prominent than the use of money, even extending to services (I helped you build your house ten years ago, so now you help me).</li> \
	<li>GDP also ignores <a href="/wiki/Subsistence_production" title="Subsistence production" class="mw-redirect">subsistence production</a>.</li> \
	<li><b>Quality improvements and inclusion of new products</b>–By not adjusting for quality improvements and new products, GDP understates true <a href="/wiki/Economic_growth" title="Economic growth">economic growth</a>. For instance, although computers today are less expensive and more powerful than computers from the past, GDP treats them as the same products by only accounting for the monetary value. The introduction of new products is also difficult to measure accurately and is not reflected in GDP despite the fact that it may increase the standard of living. For example, even the richest person from 1900 could not purchase standard products, such as antibiotics and cell phones, that an average consumer can buy today, since such modern conveniences did not exist back then.</li> \
	<li><b>What is being produced</b>–GDP counts work that produces no net change or that results from repairing harm. For example, rebuilding after a natural disaster or war may produce a considerable amount of economic activity and thus boost GDP. The economic value of <a href="/wiki/Health_care" title="Health care">health care</a> is another classic example—it may raise GDP if many people are sick and they are receiving expensive treatment, but it is not a desirable situation. Alternative economic estimates, such as the <a href="/wiki/Standard_of_living" title="Standard of living">standard of living</a> or <a href="/wiki/Discretionary_income" title="Discretionary income" class="mw-redirect">discretionary income</a> per capita try to measure the human <a href="/wiki/Utility" title="Utility">utility</a> of economic activity. See <a href="/wiki/Uneconomic_growth" title="Uneconomic growth">uneconomic growth</a>.</li> \
	<li><b>Sustainability of growth</b>– GDP is a measurement of economic historic activity and is not a necessarily a projection. A country may achieve a temporarily high GDP from use of natural resources or by misallocating investment.</li> \
	<li>Nominal GDP doesn\'t measure variations in purchasing power or costs of living by area, so when the GDP figure is deflated over time, GDP growth can vary greatly depending on the basket of goods used and the relative proportions used to deflate the GDP figure.</li> \
	<li>Cross-border comparisons of GDP can be inaccurate as they do not take into account local differences in the quality of goods, even when adjusted for <a href="/wiki/Purchasing_power_parity" title="Purchasing power parity">purchasing power parity</a>. This type of adjustment to an exchange rate is controversial because of the difficulties of finding comparable baskets of goods to compare purchasing power across countries. For instance, people in country A may consume the same number of locally produced apples as in country B, but apples in country A are of a more tasty variety. This difference in material well being will not show up in GDP statistics. This is especially true for goods that are not traded globally, such as housing.</li> \
	<li>As a measure of actual sale prices, GDP does not capture the <a href="/wiki/Economic_surplus" title="Economic surplus">economic surplus</a> between the price paid and subjective value received, and can therefore underestimate <a href="/wiki/Utility" title="Utility">aggregate utility</a>.</li> \
	</ul> \
	<p><a href="/wiki/Simon_Kuznets" title="Simon Kuznets">Simon Kuznets</a> in his very first report to the US Congress in 1934 said:<sup id="cite_ref-kuznets_2-1" class="reference"><a href="#cite_note-kuznets-2"><span>[</span>3<span>]</span></a></sup></p> \
	<blockquote> \
	<p>...the welfare of a nation can, therefore, scarcely be inferred from a measure of national income...</p> \
	</blockquote> \
	<p>In 1962, Kuznets stated:<sup id="cite_ref-23" class="reference"><a href="#cite_note-23"><span>[</span>24<span>]</span></a></sup></p> \
	<blockquote> \
	<p>Distinctions must be kept in mind between quantity and quality of growth, between costs and returns, and between the short and long run. Goals for more growth should specify more growth of what and for what.</p> \
	</blockquote> \
	<h2><span class="editsection">[<a href="/w/index.php?title=Gross_domestic_product&amp;action=edit&amp;section=17" title="Edit section: Lists of countries by their GDP">edit</a>]</span> <span class="mw-headline" id="Lists_of_countries_by_their_GDP">Lists of countries by their GDP</span></h2> \
	<ul> \
	<li><a href="/wiki/Lists_of_countries_by_GDP" title="Lists of countries by GDP">Lists of countries by GDP</a></li> \
	<li><a href="/wiki/List_of_countries_by_GDP_(nominal)" title="List of countries by GDP (nominal)">List of countries by GDP (nominal)</a>, (<a href="/wiki/List_of_countries_by_GDP_(nominal)_per_capita" title="List of countries by GDP (nominal) per capita">per capita</a>)</li> \
	<li><a href="/wiki/List_of_countries_by_GDP_(PPP)" title="List of countries by GDP (PPP)">List of countries by GDP (PPP)</a>, (<a href="/wiki/List_of_countries_by_GDP_(PPP)_per_capita" title="List of countries by GDP (PPP) per capita">per capita</a>), (<a href="/wiki/List_of_countries_by_GDP_(PPP)_per_hour_worked" title="List of countries by GDP (PPP) per hour worked">per hour</a>)</li> \
	<li><a href="/wiki/List_of_countries_by_GDP_growth" title="List of countries by GDP growth" class="mw-redirect">List of countries by GDP growth</a></li> \
	<li><a href="/wiki/List_of_countries_by_GDP_(real)_growth_rate" title="List of countries by GDP (real) growth rate" class="mw-redirect">List of countries by GDP (real) growth rate</a>, (<a href="/wiki/List_of_countries_by_GDP_(real)_growth_rate_per_capita" title="List of countries by GDP (real) growth rate per capita" class="mw-redirect">per capita</a>)</li> \
	<li><a href="/wiki/List_of_countries_by_GDP_sector_composition" title="List of countries by GDP sector composition">List of countries by GDP sector composition</a></li> \
	<li><a href="/wiki/List_of_countries_by_future_GDP_estimates_(PPP)" title="List of countries by future GDP estimates (PPP)" class="mw-redirect">List of countries by future GDP estimates (PPP)</a>, (<a href="/wiki/List_of_countries_by_future_GDP_per_capita_estimates_(PPP)" title="List of countries by future GDP per capita estimates (PPP)" class="mw-redirect">per capita</a>), (<a href="/wiki/List_of_countries_by_future_GDP_(nominal)_estimates" title="List of countries by future GDP (nominal) estimates" class="mw-redirect">nominal</a>)</li> \
	</ul> \
	<h3><span class="editsection">[<a href="/w/index.php?title=Gross_domestic_product&amp;action=edit&amp;section=18" title="Edit section: List of Newer Approaches to the Measurement of (Economic) Progress">edit</a>]</span> <span class="mw-headline" id="List_of_Newer_Approaches_to_the_Measurement_of_.28Economic.29_Progress">List of Newer Approaches to the Measurement of (Economic) Progress</span></h3> \
	<ul> \
	<li><a href="/wiki/Human_development_index" title="Human development index" class="mw-redirect">Human development index</a> (HDI) – up until 2009 report HDI used GDP as a part of its calculation and then factors in indicators of life expectancy and education levels. In 2010 the GDP component has been replaced with <a href="/wiki/Gross_national_income" title="Gross national income">GNI</a>.</li> \
	<li><a href="/wiki/Genuine_progress_indicator" title="Genuine progress indicator">Genuine progress indicator</a> (GPI) or <a href="/wiki/Index_of_Sustainable_Economic_Welfare" title="Index of Sustainable Economic Welfare">Index of Sustainable Economic Welfare</a> (ISEW) – The GPI and the ISEW attempt to address many of the above criticisms by taking the same raw information supplied for GDP and then adjust for income distribution, add for the value of household and volunteer work, and subtract for crime and pollution.</li> \
	<li><a href="/wiki/Gross_national_happiness" title="Gross national happiness">Gross national happiness</a> (GNH) – GNH measures quality of life or social progress in more holistic and psychological terms than GDP.</li> \
	<li>European Quality of Life Survey – The survey, first published in 2005, assessed quality of life across European countries through a series of questions on overall <a href="/wiki/Subjective_life_satisfaction" title="Subjective life satisfaction" class="mw-redirect">subjective life satisfaction</a>, satisfaction with different aspects of life, and sets of questions used to calculate deficits of time, loving, being and having.<sup id="cite_ref-24" class="reference"><a href="#cite_note-24"><span>[</span>25<span>]</span></a></sup></li> \
	<li><a href="/wiki/Gross_national_happiness" title="Gross national happiness">Gross national happiness</a> – The Centre for Bhutanese Studies in <a href="/wiki/Bhutan" title="Bhutan">Bhutan</a> is working on a complex set of subjective and objective indicators to measure \'national happiness\' in various domains (living standards, health, education, eco-system diversity and resilience, cultural vitality and diversity, time use and balance, good governance, community vitality and psychological well-being). This set of indicators would be used to assess progress towards gross national happiness, which they have already identified as being the nation\'s priority, above GDP.</li> \
	<li><a href="/wiki/Happy_Planet_Index" title="Happy Planet Index">Happy Planet Index</a> – The happy planet index (HPI) is an index of human well-being and environmental impact, introduced by the <a href="/wiki/New_Economics_Foundation" title="New Economics Foundation">New Economics Foundation</a> (NEF) in 2006. It measures the environmental efficiency with which human well-being is achieved within a given country or group. Human well-being is defined in terms of <a href="/wiki/Subjective_life_satisfaction" title="Subjective life satisfaction" class="mw-redirect">subjective life satisfaction</a> and <a href="/wiki/Life_expectancy" title="Life expectancy">life expectancy</a> while environmental impact is defined by the <a href="/wiki/Ecological_Footprint" title="Ecological Footprint" class="mw-redirect">Ecological Footprint</a>.</li> \
	<li><a href="/w/index.php?title=OECD_Better_Lives_Dashboard&amp;action=edit&amp;redlink=1" class="new" title="OECD Better Lives Dashboard (page does not exist)">OECD Better Lives Dashboard</a> - The better lives compendium of indicators produced in 2011 reflects some 10 years by the organisation to develop a wider of set of indicators more closed attuned to the measurement of wellbeing or welfare outcomes. There is felt to be considerable convergence (in 2011) in high income countries about the kinds of dimensions that should be included in such multi-dimensional approaches to welfare measurement - see for instance the capabilities measurement research project <a href="/wiki/Capabilities_approach" title="Capabilities approach" class="mw-redirect">capabilities approach</a>.</li> \
	</ul> \
	<h2><span class="editsection">[<a href="/w/index.php?title=Gross_domestic_product&amp;action=edit&amp;section=19" title="Edit section: See also">edit</a>]</span> <span class="mw-headline" id="See_also">See also</span></h2> \
	<table cellspacing="0" cellpadding="0" class="multicol" style="background:transparent; width:100%;"> \
	<tr> \
	<td style="width: 33.33%;" align="left" valign="top"> \
	<ul> \
	<li><a href="/wiki/Annual_average_GDP_growth" title="Annual average GDP growth" class="mw-redirect">Annual average GDP growth</a></li> \
	<li><a href="/wiki/Chained_volume_series" title="Chained volume series">Chained volume series</a></li> \
	<li><a href="/wiki/Eco-sufficiency" title="Eco-sufficiency">Eco-sufficiency</a></li> \
	<li><a href="/wiki/Green_gross_domestic_product" title="Green gross domestic product">Green gross domestic product</a></li> \
	<li><a href="/wiki/Gross_domestic_product_per_barrel" title="Gross domestic product per barrel">Gross domestic product per barrel</a></li> \
	<li><a href="/wiki/Gross_output" title="Gross output">Gross output</a></li> \
	<li><a href="/wiki/Gross_regional_domestic_product" title="Gross regional domestic product">Gross regional domestic product</a></li> \
	</ul> \
	</td> \
	<td style="width: 33.33%;" align="left" valign="top"> \
	<ul> \
	<li><a href="/wiki/Gross_state_product" title="Gross state product">Gross state product</a></li> \
	<li><a href="/wiki/Gross_value_added" title="Gross value added">Gross value added</a></li> \
	<li><a href="/wiki/Gross_world_product" title="Gross world product">Gross world product</a></li> \
	<li><a href="/wiki/Intermediate_consumption" title="Intermediate consumption">Intermediate consumption</a></li> \
	<li><a href="/wiki/Inventory_investment" title="Inventory investment">Inventory investment</a></li> \
	<li><a href="/wiki/List_of_countries_by_average_wage" title="List of countries by average wage">List of countries by average wage</a></li> \
	<li><a href="/wiki/List_of_countries_by_household_income" title="List of countries by household income" class="mw-redirect">List of countries by household income</a></li> \
	</ul> \
	</td> \
	<td style="width: 33.33%;" align="left" valign="top"> \
	<ul> \
	<li><a href="/wiki/List_of_economic_reports_by_U.S._government_agencies" title="List of economic reports by U.S. government agencies">List of economic reports by U.S. government agencies</a></li> \
	<li><a href="/wiki/Misery_index_(economics)" title="Misery index (economics)">Misery index (economics)</a></li> \
	<li><a href="/wiki/National_average_salary" title="National average salary">National average salary</a></li> \
	<li><a href="/wiki/Potential_output" title="Potential output">Potential output</a> Natural gross domestic product</li> \
	<li><a href="/wiki/Real_gross_domestic_product" title="Real gross domestic product">Real gross domestic product</a></li> \
	<li><a href="/wiki/China_GDP" title="China GDP" class="mw-redirect">China GDP</a></li> \
	</ul> \
	</td> \
	</tr> \
	</table> \
	<h2><span class="editsection">[<a href="/w/index.php?title=Gross_domestic_product&amp;action=edit&amp;section=20" title="Edit section: Bibliography">edit</a>]</span> <span class="mw-headline" id="Bibliography">Bibliography</span></h2> \
	<p>Australian Bureau for Statistics, <a href="http://www.abs.gov.au/Ausstats/abs@.nsf/Latestproducts/3F880EE1D366198CCA2569A400061616?opendocument" class="external text" rel="nofollow"><i>Australian National Accounts: Concepts, Sources and Mathods</i></a>, 2000. Retrieved November 2009. In depth explanations of how GDP and other national accounts items are determined.</p> \
	<p>United States Department of Commerce, Bureau of Economic Analysis, <span class="PDFlink"><a href="http://www.bea.gov/national/pdf/NIPAhandbookch1-4.pdf" class="external text" rel="nofollow"><i>Concepts and Methods of the United States National Income and Product Accounts</i></a></span><span style="font-size:smaller;">PDF</span>. Retrieved November 2009. In depth explanations of how GDP and other national accounts items are determined.</p> \
	<h2><span class="editsection">[<a href="/w/index.php?title=Gross_domestic_product&amp;action=edit&amp;section=21" title="Edit section: References">edit</a>]</span> <span class="mw-headline" id="References">References</span></h2> \
	<div class="reflist references-column-width" style="-moz-column-width: 30em; -webkit-column-width: 30em; column-width: 30em; list-style-type: decimal;"> \
	<ol class="references"> \
	<li id="cite_note-0"><b><a href="#cite_ref-0">^</a></b> <span class="citation book">O\'Sullivan, Arthur.</span><span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=&amp;rft.aulast=O%27Sullivan&amp;rft.aufirst=Arthur&amp;rft.au=O%27Sullivan%2C%26%2332%3BArthur&amp;rfr_id=info:sid/en.wikipedia.org:Gross_domestic_product"><span style="display: none;">&#160;</span></span></li> \
	<li id="cite_note-1"><b><a href="#cite_ref-1">^</a></b> <a href="http://www.guardian.co.uk/business/2009/sep/14/sarkozy-attacks-gdp-focus" class="external text" rel="nofollow">French President seeks alternatives to GDP</a>, The Guardian 14-09-2009.<br /> \
	<span class="PDFlink"><a href="http://www.beyond-gdp.eu/download/bgdp-bp-goossens.pdf" class="external text" rel="nofollow">European Parliament, Policy Department Economic and Scientific Policy: Beyond GDP Study</a></span><span style="font-size:smaller;">PDF&#160;(1.47&#160;MB)</span></li> \
	<li id="cite_note-kuznets-2">^ <a href="#cite_ref-kuznets_2-0"><sup><i><b>a</b></i></sup></a> <a href="#cite_ref-kuznets_2-1"><sup><i><b>b</b></i></sup></a> Simon Kuznets, 1934. "National Income, 1929–1932". 73rd US Congress, 2d session, Senate document no. 124, page 7. <a href="http://library.bea.gov/u?/SOD,888" class="external free" rel="nofollow">http://library.bea.gov/u?/SOD,888</a></li> \
	<li id="cite_note-3"><b><a href="#cite_ref-3">^</a></b> World Bank, Statistical Manual &gt;&gt; National Accounts &gt;&gt; <a href="http://web.worldbank.org/WBSITE/EXTERNAL/DATASTATISTICS/EXTDECSTAMAN/0,,contentMDK:20882526~menuPK:2648252~pagePK:64168445~piPK:64168309~theSitePK:2077967~isCURL:Y,00.html" class="external text" rel="nofollow">GDP–final output</a>, retrieved October 2009.<br /> \
	<span class="citation web"><a href="http://www.hm-treasury.gov.uk/data_gdp_backgd.htm" class="external text" rel="nofollow">"User\'s guide: Background information on GDP and GDP deflator"</a>. HM Treasury<span class="printonly">. <a href="http://www.hm-treasury.gov.uk/data_gdp_backgd.htm" class="external free" rel="nofollow">http://www.hm-treasury.gov.uk/data_gdp_backgd.htm</a></span>.</span><span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=bookitem&amp;rft.btitle=User%27s+guide%3A+Background+information+on+GDP+and+GDP+deflator&amp;rft.atitle=&amp;rft.pub=HM+Treasury&amp;rft_id=http%3A%2F%2Fwww.hm-treasury.gov.uk%2Fdata_gdp_backgd.htm&amp;rfr_id=info:sid/en.wikipedia.org:Gross_domestic_product"><span style="display: none;">&#160;</span></span><br /> \
	<span class="citation web"><a href="http://www.bea.gov/national/pdf/nipa_primer.pdf" class="external text" rel="nofollow">"Measuring the Economy: A Primer on GDP and the National Income and Product Accounts"</a> (PDF). Bureau of Economic Analysis<span class="printonly">. <a href="http://www.bea.gov/national/pdf/nipa_primer.pdf" class="external free" rel="nofollow">http://www.bea.gov/national/pdf/nipa_primer.pdf</a></span>.</span><span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=bookitem&amp;rft.btitle=Measuring+the+Economy%3A+A+Primer+on+GDP+and+the+National+Income+and+Product+Accounts&amp;rft.atitle=&amp;rft.pub=Bureau+of+Economic+Analysis&amp;rft_id=http%3A%2F%2Fwww.bea.gov%2Fnational%2Fpdf%2Fnipa_primer.pdf&amp;rfr_id=info:sid/en.wikipedia.org:Gross_domestic_product"><span style="display: none;">&#160;</span></span></li> \
	<li id="cite_note-4"><b><a href="#cite_ref-4">^</a></b> Thayer Watkins, San José State University Department of Economics, <a href="http://www.sjsu.edu/faculty/watkins/gdp.htm" class="external text" rel="nofollow">"Gross Domestic Product from the Transactions Table for an Economy"</a>, commentary to first table, " Transactions Table for an Economy". (Page retrieved November 2009.)</li> \
	<li id="cite_note-5"><b><a href="#cite_ref-5">^</a></b> <i>Concepts and Methods of the United States National Income and Product Accounts</i>, chap. 2.</li> \
	<li id="cite_note-6"><b><a href="#cite_ref-6">^</a></b> United States Bureau of Economic Analysis, <span class="PDFlink"><a href="http://www.bea.gov/national/pdf/nipaguid.pdf" class="external text" rel="nofollow"><i>A guide to the National Income and Product Accounts of the United States</i></a></span><span style="font-size:smaller;">PDF</span>, page 5; retrieved November 2009. Another term, "business current transfer payments," may be added. Also, the document indicates that Capital Consumption Adjustment (CCAdj) and Inventory Valuation Adjustment (IVA) are applied to the proprieter\'s income and corporate profits terms; and CCAdj is applied to rental income.</li> \
	<li id="cite_note-7"><b><a href="#cite_ref-7">^</a></b> BEA, <i>Concepts and Methods of the United States National Income and Product Accounts</i>, p 12.</li> \
	<li id="cite_note-8"><b><a href="#cite_ref-8">^</a></b> <i>Australian National Accounts: Concepts, Sources and Methods</i>, 2000, sections 3.5 and 4.15.</li> \
	<li id="cite_note-9"><b><a href="#cite_ref-9">^</a></b> This and the following statement on entitlement to compensation are from <i>Australian National Accounts: Concepts, Sources and Methods</i>, 2000, section 4.6.</li> \
	<li id="cite_note-10"><b><a href="#cite_ref-10">^</a></b> <i>Concepts and Methods of the United States National Income and Product Accounts</i>, page 2-2.</li> \
	<li id="cite_note-11"><b><a href="#cite_ref-11">^</a></b> <i>Concepts and Methods of the United States National Income and Product Accounts, page 2-2.</i></li> \
	<li id="cite_note-12"><b><a href="#cite_ref-12">^</a></b> <i>Australian National Accounts: Concepts, Sources and Methods</i>, 2000, section 4.4.</li> \
	<li id="cite_note-13"><b><a href="#cite_ref-13">^</a></b> <i>Concepts and Methods of the United States National Income and Product Accounts</i>, page 2-2; and <i>Australian National Accounts: Concepts, Sources and Methods</i>, 2000, section 4.4.</li> \
	<li id="cite_note-Product_Accounts_page_2-4-14">^ <a href="#cite_ref-Product_Accounts_page_2-4_14-0"><sup><i><b>a</b></i></sup></a> <a href="#cite_ref-Product_Accounts_page_2-4_14-1"><sup><i><b>b</b></i></sup></a> <i>Concepts and Methods of the United States National Income and Product Accounts</i>, page 2-4.</li> \
	<li id="cite_note-15"><b><a href="#cite_ref-15">^</a></b> <i>Concepts and Methods of the United States National Income and Product Accounts</i>, page 2-5.</li> \
	<li id="cite_note-16"><b><a href="#cite_ref-16">^</a></b> <span class="citation book">Lequiller, François; Derek Blades (2006). <a href="http://books.google.co.uk/books?id=pXpJL6f8b3wC&amp;printsec=frontcover&amp;dq=%22Understanding+National+Accounts%22&amp;source=bl&amp;ots=_6_lHq-McY&amp;sig=YqWljozkylpi4IFspFnjGwPicPw&amp;hl=en&amp;ei=4g7GTLT7OJCQjAfXiZ11&amp;sa=X&amp;oi=book_result&amp;ct=result&amp;resnum=5&amp;ved=0CCMQ6AEwBA#v=onepage&amp;q=%22To%20convert%20GDP%20into%20GNI%22&amp;f=false" class="external text" rel="nofollow"><i>Understanding National Accounts</i></a>. OECD. p.&#160;18. <a href="/wiki/International_Standard_Book_Number" title="International Standard Book Number">ISBN</a>&#160;<a href="/wiki/Special:BookSources/978-92-64-02566-0" title="Special:BookSources/978-92-64-02566-0">978-92-64-02566-0</a><span class="printonly">. <a href="http://books.google.co.uk/books?id=pXpJL6f8b3wC&amp;printsec=frontcover&amp;dq=%22Understanding+National+Accounts%22&amp;source=bl&amp;ots=_6_lHq-McY&amp;sig=YqWljozkylpi4IFspFnjGwPicPw&amp;hl=en&amp;ei=4g7GTLT7OJCQjAfXiZ11&amp;sa=X&amp;oi=book_result&amp;ct=result&amp;resnum=5&amp;ved=0CCMQ6AEwBA#v=onepage&amp;q=%22To%20convert%20GDP%20into%20GNI%22&amp;f=false" class="external free" rel="nofollow">http://books.google.co.uk/books?id=pXpJL6f8b3wC&amp;printsec=frontcover&amp;dq=%22Understanding+National+Accounts%22&amp;source=bl&amp;ots=_6_lHq-McY&amp;sig=YqWljozkylpi4IFspFnjGwPicPw&amp;hl=en&amp;ei=4g7GTLT7OJCQjAfXiZ11&amp;sa=X&amp;oi=book_result&amp;ct=result&amp;resnum=5&amp;ved=0CCMQ6AEwBA#v=onepage&amp;q=%22To%20convert%20GDP%20into%20GNI%22&amp;f=false</a></span>. "To convert GDP into GNI, it is necessary to add the income received by resident units from abroad and deduct the income created by production in the country but transferred to units residing abroad."</span><span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Understanding+National+Accounts&amp;rft.aulast=Lequiller&amp;rft.aufirst=Fran%C3%A7ois&amp;rft.au=Lequiller%2C%26%2332%3BFran%C3%A7ois&amp;rft.date=2006&amp;rft.pages=p.%26nbsp%3B18&amp;rft.pub=OECD&amp;rft.isbn=978-92-64-02566-0&amp;rft_id=http%3A%2F%2Fbooks.google.co.uk%2Fbooks%3Fid%3DpXpJL6f8b3wC%26printsec%3Dfrontcover%26dq%3D%2522Understanding%2BNational%2BAccounts%2522%26source%3Dbl%26ots%3D_6_lHq-McY%26sig%3DYqWljozkylpi4IFspFnjGwPicPw%26hl%3Den%26ei%3D4g7GTLT7OJCQjAfXiZ11%26sa%3DX%26oi%3Dbook_result%26ct%3Dresult%26resnum%3D5%26ved%3D0CCMQ6AEwBA%23v%3Donepage%26q%3D%2522To%2520convert%2520GDP%2520into%2520GNI%2522%26f%3Dfalse&amp;rfr_id=info:sid/en.wikipedia.org:Gross_domestic_product"><span style="display: none;">&#160;</span></span></li> \
	<li id="cite_note-17"><b><a href="#cite_ref-17">^</a></b> United States, Bureau of Economic Analysis, Glossary, <a href="http://www.bea.gov/glossary/glossary.cfm" class="external text" rel="nofollow">"GDP"</a>. Retrieved November 2009.</li> \
	<li id="cite_note-18"><b><a href="#cite_ref-18">^</a></b> <span class="citation web"><a href="http://bea.gov/national/nipaweb/SelectTable.asp?Selected=Y" class="external text" rel="nofollow">"U.S. Department of Commerce. Bureau of Economic Analysis"</a>. Bea.gov. 2009-10-21<span class="printonly">. <a href="http://bea.gov/national/nipaweb/SelectTable.asp?Selected=Y" class="external free" rel="nofollow">http://bea.gov/national/nipaweb/SelectTable.asp?Selected=Y</a></span><span class="reference-accessdate">. Retrieved 2010-07-31</span>.</span><span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=bookitem&amp;rft.btitle=U.S.+Department+of+Commerce.+Bureau+of+Economic+Analysis&amp;rft.atitle=&amp;rft.date=2009-10-21&amp;rft.pub=Bea.gov&amp;rft_id=http%3A%2F%2Fbea.gov%2Fnational%2Fnipaweb%2FSelectTable.asp%3FSelected%3DY&amp;rfr_id=info:sid/en.wikipedia.org:Gross_domestic_product"><span style="display: none;">&#160;</span></span></li> \
	<li id="cite_note-Central_Bureau_of_Statistics-19"><b><a href="#cite_ref-Central_Bureau_of_Statistics_19-0">^</a></b> <span class="citation web"><a href="http://www.central-bureau-of-statistics.an/SNA/sna_intro.asp" class="external text" rel="nofollow">"National Accounts"</a>. Central Bureau of Statistics<span class="printonly">. <a href="http://www.central-bureau-of-statistics.an/SNA/sna_intro.asp" class="external free" rel="nofollow">http://www.central-bureau-of-statistics.an/SNA/sna_intro.asp</a></span><span class="reference-accessdate">. Retrieved 6/29/2011</span>.</span><span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=bookitem&amp;rft.btitle=National+Accounts&amp;rft.atitle=&amp;rft.pub=Central+Bureau+of+Statistics&amp;rft_id=http%3A%2F%2Fwww.central-bureau-of-statistics.an%2FSNA%2Fsna_intro.asp&amp;rfr_id=info:sid/en.wikipedia.org:Gross_domestic_product"><span style="display: none;">&#160;</span></span></li> \
	<li id="cite_note-20"><b><a href="#cite_ref-20">^</a></b> HM Treasury, <i>Background information on GDP and GDP deflator</i><br /> \
	Some of the complications involved in comparing national accounts from different years are suggested in this World Bank <a href="http://web.worldbank.org/WBSITE/EXTERNAL/DATASTATISTICS/EXTDECSTAMAN/0,,contentMDK:20908551~menuPK:2648276~pagePK:64168445~piPK:64168309~theSitePK:2077967~isCURL:Y,00.html" class="external text" rel="nofollow">document</a>.</li> \
	<li id="cite_note-21"><b><a href="#cite_ref-21">^</a></b> <a href="http://www.thinkingeurope.eu/images/dbimages/docs/GDPanditsenemies.pdf" class="external text" rel="nofollow">GDP and its Enemies</a>, Centre for European Studies, September 2010</li> \
	<li id="cite_note-22"><b><a href="#cite_ref-22">^</a></b> <span class="citation news"><a href="http://www.nytimes.com/2009/08/10/opinion/10zencey.html?_r=4&amp;pagewanted=1&amp;emc=eta1" class="external text" rel="nofollow">"Eric Zencey-G.D.P. R.I.P."</a>. Nytimes.com. August 2009<span class="printonly">. <a href="http://www.nytimes.com/2009/08/10/opinion/10zencey.html?_r=4&amp;pagewanted=1&amp;emc=eta1" class="external free" rel="nofollow">http://www.nytimes.com/2009/08/10/opinion/10zencey.html?_r=4&amp;pagewanted=1&amp;emc=eta1</a></span><span class="reference-accessdate">. Retrieved 2011-01-31</span>.</span><span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=bookitem&amp;rft.btitle=Eric+Zencey-G.D.P.+R.I.P.&amp;rft.atitle=&amp;rft.date=August+2009&amp;rft.pub=Nytimes.com&amp;rft_id=http%3A%2F%2Fwww.nytimes.com%2F2009%2F08%2F10%2Fopinion%2F10zencey.html%3F_r%3D4%26pagewanted%3D1%26emc%3Deta1&amp;rfr_id=info:sid/en.wikipedia.org:Gross_domestic_product"><span style="display: none;">&#160;</span></span></li> \
	<li id="cite_note-23"><b><a href="#cite_ref-23">^</a></b> Simon Kuznets. "How To Judge Quality". The New Republic, October 20, 1962</li> \
	<li id="cite_note-24"><b><a href="#cite_ref-24">^</a></b> <span class="citation web"><a href="http://www.eurofound.europa.eu/publications/htmlfiles/ef0591.htm" class="external text" rel="nofollow">"First European Quality of Life Survey"</a><span class="printonly">. <a href="http://www.eurofound.europa.eu/publications/htmlfiles/ef0591.htm" class="external free" rel="nofollow">http://www.eurofound.europa.eu/publications/htmlfiles/ef0591.htm</a></span>.</span><span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=bookitem&amp;rft.btitle=First+European+Quality+of+Life+Survey&amp;rft.atitle=&amp;rft_id=http%3A%2F%2Fwww.eurofound.europa.eu%2Fpublications%2Fhtmlfiles%2Fef0591.htm&amp;rfr_id=info:sid/en.wikipedia.org:Gross_domestic_product"><span style="display: none;">&#160;</span></span></li> \
	</ol> \
	</div> \
	<h2><span class="editsection">[<a href="/w/index.php?title=Gross_domestic_product&amp;action=edit&amp;section=22" title="Edit section: External links">edit</a>]</span> <span class="mw-headline" id="External_links">External links</span></h2> \
	<h3><span class="editsection">[<a href="/w/index.php?title=Gross_domestic_product&amp;action=edit&amp;section=23" title="Edit section: Global">edit</a>]</span> <span class="mw-headline" id="Global">Global</span></h3> \
	<ul> \
	<li><a href="http://www.google.com/publicdata?ds=wb-wdi&amp;met=ny_gdp_mktp_cd&amp;idim=country:USA:CHN:FRA:DEU:JPN:GBR" class="external text" rel="nofollow">World GDP Chart (since 1960)</a></li> \
	<li><a href="http://www.abs.gov.au/Ausstats/abs@.nsf/66f306f503e529a5ca25697e0017661f/3f880ee1d366198cca2569a400061616!OpenDocument" class="external text" rel="nofollow">Australian Bureau of Statistics Manual on GDP measurement</a></li> \
	<li><a href="http://perso.wanadoo.fr/pgreenfinch/eoblpib.htm" class="external text" rel="nofollow">GDP-indexed bonds</a></li> \
	<li><a href="http://sun-bin.blogspot.com/2005/12/map-world-population-and-gdp-scaled.html" class="external text" rel="nofollow">GDP scaled maps</a></li> \
	<li><a href="http://www.intelligentguess.com/blog/?p=119" class="external text" rel="nofollow">Euro area GDP growth rate (since 1996) as compared to the Bank Rate (since 2000)</a></li> \
	<li><a href="http://ddp-ext.worldbank.org/ext/DDPQQ/member.do?method=getMembers&amp;userid=1&amp;queryId=135" class="external text" rel="nofollow">World Development Indicators (WDI)</a></li> \
	<li><a href="http://www.economist.com/countries/" class="external text" rel="nofollow">Economist Country Briefings</a></li> \
	<li><a href="http://unstats.un.org/unsd/databases.htm" class="external text" rel="nofollow">UN Statistical Databases</a></li> \
	<li><a href="http://wikiprogress.org/w/index.php/Is_Life_Getting_Better" class="external text" rel="nofollow">Is Life Getting Better&#160;: What is GDP?</a> Pamphlet describing the basic idea of GDP, from OECD\'s Measuring Progress project.</li> \
	</ul> \
	<h3><span class="editsection">[<a href="/w/index.php?title=Gross_domestic_product&amp;action=edit&amp;section=24" title="Edit section: Data">edit</a>]</span> <span class="mw-headline" id="Data">Data</span></h3> \
	<ul> \
	<li><a href="http://www.visionofhumanity.org/gpi-data/#/2010/GDP1" class="external text" rel="nofollow">Thermal Maps of the World Nominal GDP in US$ purchasing power parity from the EIU 2007–2010</a></li> \
	<li><a href="http://www.bea.gov/national/index.htm#gdp" class="external text" rel="nofollow">Bureau of Economic Analysis: Official United States GDP data</a></li> \
	<li><a href="http://www.blogmybrain.com/stock_apps/graphical_economy/NIPA%20-%20Domestic%20Product%20and%20Income/6/1/q" class="external text" rel="nofollow">Graphs of Historical Real U.S. GDP</a></li> \
	<li><a href="http://www.historicalstatistics.org/" class="external text" rel="nofollow">Historicalstatistics.org: Links to historical statistics on GDP for different countries and regions</a></li> \
	<li><a href="http://www.measuringworth.org/usgdp/" class="external text" rel="nofollow">Historical US GDP (yearly data)</a>, 1790–present</li> \
	<li><a href="http://finance-data.com/series/GDP" class="external text" rel="nofollow">Historical US GDP (quarterly data)</a>, 1947–present</li> \
	<li><a href="http://stats.oecd.org/Index.aspx?DataSetCode=SNA_TABLE1" class="external text" rel="nofollow">OECD Statistics</a></li> \
	<li><a href="http://www.google.com/publicdata/explore?ds=a7jenngfc4um7_&amp;ctype=l&amp;strail=false&amp;nselm=h&amp;met_y=gross_domestic_product&amp;hl=en&amp;dl=en" class="external text" rel="nofollow">Google – public data</a>: GDP and Personal Income of the U.S. (annual): Nominal Gross Domestic Product</li> \
	</ul> \
	<h3><span class="editsection">[<a href="/w/index.php?title=Gross_domestic_product&amp;action=edit&amp;section=25" title="Edit section: Articles and books">edit</a>]</span> <span class="mw-headline" id="Articles_and_books">Articles and books</span></h3> \
	<ul> \
	<li><a href="http://dieoff.org/page11.htm" class="external text" rel="nofollow">What\'s wrong with the GDP?</a></li> \
	<li><a href="http://ingrimayne.saintjoe.edu/econ/Measuring/GNP2.html" class="external text" rel="nofollow">Limitations of GDP Statistics by Schenk, Robert.</a></li> \
	<li><a href="http://pages.stern.nyu.edu/~nroubini/MEASURE.HTM" class="external text" rel="nofollow">whether output and CPI inflation are mismeasured, by</a> <a href="/wiki/Nouriel_Roubini" title="Nouriel Roubini">Nouriel Roubini</a> and David Backus, in Lectures in Macroeconomics</li> \
	<li><a href="/w/index.php?title=Fengbo_Zhang&amp;action=edit&amp;redlink=1" class="new" title="Fengbo Zhang (page does not exist)">Fengbo Zhang</a> – the founder of <a href="/wiki/China_GDP" title="China GDP" class="mw-redirect">China GDP</a></li> \
	<li>Chapter 22 of Dr. Roger A. McCain\'s <a href="http://william-king.www.drexel.edu/top/prin/txt/EcoToC.html" class="external text" rel="nofollow">Essential Principles of Economics: A Hypermedia Text</a></li> \
	<li>Rodney Edvinsson, <span class="PDFlink"><a href="http://urn.kb.se/resolve?urn=urn:nbn:se:su:diva-378" class="external text" rel="nofollow">Growth, Accumulation, Crisis: With New Macroeconomic Data for Sweden 1800–2000</a></span><span style="font-size:smaller;">PDF</span></li> \
	<li>Clifford Cobb, Ted Halstead and Jonathan Rowe. "If the GDP is up, why is America down?" The Atlantic Monthly, vol. 276, no. 4, October 1995, pages 59–78.</li> \
	<li>Jerorn C.J.M. van den Bergh, "<a href="http://papers.ssrn.com/sol3/papers.cfm?abstract_id=962343" class="external text" rel="nofollow">Abolishing GDP</a>"</li> \
	</ul> \
	<table class="navbox" cellspacing="0" style=";"> \
	<tr> \
	<td style="padding:2px;"> \
	<table cellspacing="0" class="nowraplinks collapsible autocollapse" style="width:100%;background:transparent;color:inherit;;"> \
	<tr> \
	<th style=";" colspan="2" class="navbox-title"><span style="float:left;width:6em;text-align:left;"><span class="noprint plainlinks navbar" style=""><span style="white-space:nowrap;word-spacing:-.12em;"><a href="/wiki/Template:GDP_country_lists" title="Template:GDP country lists"><span style=";;background:none transparent;border:none;font-size:100%;" title="View this template">v</span></a> <span style=";;background:none transparent;border:none;font-size:100%;"><b>·</b></span> <a href="/wiki/Template_talk:GDP_country_lists" title="Template talk:GDP country lists"><span style=";;background:none transparent;border:none;font-size:100%;" title="Discuss this template">d</span></a> <span style=";;background:none transparent;border:none;font-size:100%;"><b>·</b></span> <a href="http://en.wikipedia.org/w/index.php?title=Template:GDP_country_lists&amp;action=edit" class="external text" rel="nofollow"><span style=";;background:none transparent;border:none;font-size:100%;" title="Edit this template">e</span></a></span></span></span><span class="" style="font-size:110%;"><a href="/wiki/Lists_of_countries_and_territories" title="Lists of countries and territories">Lists of countries</a> by <a href="/wiki/GDP" title="GDP" class="mw-redirect">GDP</a> <a href="/wiki/List_of_international_rankings" title="List of international rankings">rankings</a></span></th> \
	</tr> \
	<tr style="height:2px;"> \
	<td></td> \
	</tr> \
	<tr> \
	<td class="navbox-group" style=";;"><a href="/wiki/List_of_countries_by_GDP_(nominal)" title="List of countries by GDP (nominal)">Nominal</a></td> \
	<td style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px;;;" class="navbox-list navbox-odd"> \
	<div style="padding:0em 0.25em"><a href="/wiki/List_of_countries_by_GDP_(nominal)_per_capita" title="List of countries by GDP (nominal) per capita">Per capita</a> &#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_countries_by_past_and_future_GDP_(nominal)" title="List of countries by past and future GDP (nominal)">Past and future</a> (<a href="/wiki/List_of_countries_by_past_and_future_GDP_(nominal)_per_capita" title="List of countries by past and future GDP (nominal) per capita">per capita</a>)&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_countries_by_GDP_sector_composition" title="List of countries by GDP sector composition">Sector composition</a> &#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/Historical_list_of_ten_largest_countries_by_GDP" title="Historical list of ten largest countries by GDP">Ten largest historically</a></div> \
	</td> \
	</tr> \
	<tr style="height:2px"> \
	<td></td> \
	</tr> \
	<tr> \
	<td class="navbox-group" style=";;"><a href="/wiki/List_of_countries_by_GDP_(PPP)" title="List of countries by GDP (PPP)">Purchasing power parity (PPP)</a></td> \
	<td style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px;;;" class="navbox-list navbox-even"> \
	<div style="padding:0em 0.25em"><a href="/wiki/List_of_countries_by_GDP_(PPP)_per_capita" title="List of countries by GDP (PPP) per capita">Per capita</a> &#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_regions_by_past_GDP_(PPP)" title="List of regions by past GDP (PPP)">Past to 1 AD</a> (<a href="/wiki/List_of_regions_by_past_GDP_(PPP)_per_capita" title="List of regions by past GDP (PPP) per capita">per capita</a>)&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_countries_by_future_GDP_(PPP)_estimates" title="List of countries by future GDP (PPP) estimates">Future</a> (<a href="/wiki/List_of_countries_by_future_GDP_(PPP)_per_capita_estimates" title="List of countries by future GDP (PPP) per capita estimates">per capita</a>)&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_countries_by_GDP_(PPP)_per_hour_worked" title="List of countries by GDP (PPP) per hour worked">Per hour</a> &#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_countries_by_GDP_(PPP)_per_person_employed" title="List of countries by GDP (PPP) per person employed">Per person employed</a> &#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_bordering_countries_with_greatest_relative_differences_in_GDP_(PPP)_per_capita" title="List of bordering countries with greatest relative differences in GDP (PPP) per capita">Relative differences between bordering countries per capita</a></div> \
	</td> \
	</tr> \
	<tr style="height:2px"> \
	<td></td> \
	</tr> \
	<tr> \
	<td class="navbox-group" style=";;"><a href="/wiki/List_of_countries_by_nominal_GDP_growth_rate" title="List of countries by nominal GDP growth rate">Growth</a></td> \
	<td style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px;;;" class="navbox-list navbox-odd"> \
	<div style="padding:0em 0.25em"><a href="/wiki/List_of_countries_by_real_GDP_growth_rate" title="List of countries by real GDP growth rate" class="mw-redirect">Real</a> &#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_countries_by_GDP_(real)_per_capita_growth_rate" title="List of countries by GDP (real) per capita growth rate">Per capita</a> &#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_countries_by_GDP_growth_1990%E2%80%932007" title="List of countries by GDP growth 1990–2007">1990–2007 growth</a> &#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_countries_by_industrial_production_growth_rate" title="List of countries by industrial production growth rate">Industrial growth</a></div> \
	</td> \
	</tr> \
	<tr style="height:2px"> \
	<td></td> \
	</tr> \
	<tr> \
	<td class="navbox-group" style=";;"><a href="/wiki/Gross_national_income" title="Gross national income">Gross national income (GNI)</a></td> \
	<td style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px;;;" class="navbox-list navbox-even"> \
	<div style="padding:0em 0.25em"><a href="/wiki/List_of_countries_by_GNI_(nominal,_Atlas_method)_per_capita" title="List of countries by GNI (nominal, Atlas method) per capita">Nominal</a> &#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_countries_by_GNI_(PPP)_per_capita" title="List of countries by GNI (PPP) per capita">PPP</a></div> \
	</td> \
	</tr> \
	<tr style="height:2px"> \
	<td></td> \
	</tr> \
	<tr> \
	<td class="navbox-group" style=";;">Countries by region</td> \
	<td style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px;;;" class="navbox-list navbox-odd"> \
	<div style="padding:0em 0.25em">Africa (<a href="/wiki/List_of_African_countries_by_GDP_(nominal)" title="List of African countries by GDP (nominal)">nominal</a> &#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_African_countries_by_GDP_(PPP)" title="List of African countries by GDP (PPP)">PPP</a>)&#160;<span style="font-weight:bold;">·</span>  Latin America &amp; Caribbean (<a href="/wiki/List_of_Latin_American_and_Caribbean_countries_by_GDP_(nominal)" title="List of Latin American and Caribbean countries by GDP (nominal)">nominal</a> &#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_Latin_American_and_Caribbean_countries_by_GDP_(PPP)" title="List of Latin American and Caribbean countries by GDP (PPP)">PPP</a>)&#160;<span style="font-weight:bold;">·</span>  North America (<a href="/wiki/List_of_North_American_countries_by_GDP_(nominal)" title="List of North American countries by GDP (nominal)">nominal</a> &#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_North_American_countries_by_GDP_(PPP)" title="List of North American countries by GDP (PPP)">PPP</a>)&#160;<span style="font-weight:bold;">·</span>  South America (<a href="/wiki/List_of_South_American_countries_by_GDP_(nominal)" title="List of South American countries by GDP (nominal)">nominal</a> &#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_South_American_countries_by_GDP_(PPP)" title="List of South American countries by GDP (PPP)">PPP</a>)&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_Arab_League_countries_by_GDP_(nominal)" title="List of Arab League countries by GDP (nominal)">Arab League</a> &#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_Asian_countries_by_GDP" title="List of Asian countries by GDP">Asia</a>&#160;<span style="font-weight:bold;">·</span>  Asia &amp; Pacific (<a href="/wiki/List_of_Asian_and_Pacific_countries_by_GDP_(nominal)" title="List of Asian and Pacific countries by GDP (nominal)">nominal</a> &#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_Asian_and_Pacific_countries_by_GDP_(nominal)_per_capita" title="List of Asian and Pacific countries by GDP (nominal) per capita">nominal per capita</a> &#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_Asian_and_Pacific_countries_by_GDP_(PPP)" title="List of Asian and Pacific countries by GDP (PPP)">PPP</a>)&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/Lists_of_former_Soviet_Republics_by_GDP_(PPP)" title="Lists of former Soviet Republics by GDP (PPP)">Former Soviet Republics</a>&#160;<span style="font-weight:bold;">·</span>  Europe (<a href="/wiki/List_of_European_countries_by_GDP_(nominal)" title="List of European countries by GDP (nominal)" class="mw-redirect">nominal</a> &#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_European_countries_by_GDP_(nominal)_per_capita" title="List of European countries by GDP (nominal) per capita" class="mw-redirect">nominal per capita</a> &#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_European_countries_by_GDP_(PPP)" title="List of European countries by GDP (PPP)" class="mw-redirect">PPP</a> &#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_European_countries_by_GDP_(PPP)_per_capita" title="List of European countries by GDP (PPP) per capita" class="mw-redirect">PPP per capita</a>)&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_Oceanian_countries_by_GDP_(PPP)" title="List of Oceanian countries by GDP (PPP)">Oceania</a></div> \
	</td> \
	</tr> \
	<tr style="height:2px"> \
	<td></td> \
	</tr> \
	<tr> \
	<td class="navbox-group" style=";;"><a href="/wiki/Gross_state_product" title="Gross state product">Subnational divisions</a></td> \
	<td style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px;;;" class="navbox-list navbox-even"> \
	<div style="padding:0em 0.25em"><a href="/wiki/List_of_Argentine_provinces_by_GDP_(nominal)" title="List of Argentine provinces by GDP (nominal)" class="mw-redirect">Argentina</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_Australian_states_and_territories_by_gross_state_product" title="List of Australian states and territories by gross state product">Australia</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_Brazilian_states_by_gross_domestic_product" title="List of Brazilian states by gross domestic product">Brazil</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_Canadian_provinces_and_territories_by_gross_domestic_product" title="List of Canadian provinces and territories by gross domestic product">Canada</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/Ranked_list_of_Chilean_regions#By_regional_GDP_.28PPP.29" title="Ranked list of Chilean regions" class="mw-redirect">Chile</a> (<a href="/wiki/Ranked_list_of_Chilean_regions#By_regional_GDP_.28PPP.29_per_capita" title="Ranked list of Chilean regions" class="mw-redirect">per capita</a>)&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_Chinese_administrative_divisions_by_GDP" title="List of Chinese administrative divisions by GDP">China</a> (<a href="/wiki/List_of_Chinese_administrative_divisions_by_GDP_per_capita" title="List of Chinese administrative divisions by GDP per capita">per capita</a>&#160;<span style="font-weight:bold;">·</span> <a href="/wiki/List_of_Chinese_municipalities_and_prefecture-level_cities_by_GDP_over_100_billion_Chinese_yuan" title="List of Chinese municipalities and prefecture-level cities by GDP over 100 billion Chinese yuan">top cities</a>)&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_French_Regions_by_GDP" title="List of French Regions by GDP">France</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_German_states_by_GDP" title="List of German states by GDP">Germany</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_Indian_states_by_GDP" title="List of Indian states by GDP">India</a>&#160;<span style="font-weight:bold;">·</span> <a href="/wiki/List_of_Indonesian_provinces_by_GDP_per_capita" title="List of Indonesian provinces by GDP per capita" class="mw-redirect">Indonesia</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_Italian_regions_by_GDP_(PPP)" title="List of Italian regions by GDP (PPP)">Italy</a> (<a href="/wiki/List_of_Italian_regions_by_GDP_per_capita" title="List of Italian regions by GDP per capita">per capita</a>) &#160;<span style="font-weight:bold;">·</span> <a href="/wiki/List_of_Japanese_prefectures_by_GDP" title="List of Japanese prefectures by GDP">Japan</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_Mexican_states_by_GDP" title="List of Mexican states by GDP">Mexico</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_Pakistani_provinces_by_gross_domestic_product" title="List of Pakistani provinces by gross domestic product">Pakistan</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_Russian_federal_subjects_by_GRP" title="List of Russian federal subjects by GRP">Russia</a> &#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_South_Korean_regions_by_GDP_per_capita" title="List of South Korean regions by GDP per capita">South Korea (per capita)</a> &#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_Spanish_Autonomous_communities_and_Autonomous_cities_by_GDP" title="List of Spanish Autonomous communities and Autonomous cities by GDP">Spain</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_U.S._states_by_GDP" title="List of U.S. states by GDP">U.S.</a> (<a href="/wiki/Comparison_between_U.S._states_and_countries_by_GDP_(nominal)" title="Comparison between U.S. states and countries by GDP (nominal)">comparison with countries</a>)<br /> \
	<a href="/wiki/List_of_country_subdivisions_by_GDP_over_100_billion_US_dollars" title="List of country subdivisions by GDP over 100 billion US dollars">Top country subdivisions by GDP (nominal)</a></div> \
	</td> \
	</tr> \
	<tr style="height:2px;"> \
	<td></td> \
	</tr> \
	<tr> \
	<td class="navbox-abovebelow" style=";" colspan="2"><a href="/wiki/Template:Finance_country_lists" title="Template:Finance country lists">Lists of countries by financial rankings</a> &#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/Lists_by_country" title="Lists by country">Lists by country</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_international_rankings" title="List of international rankings">List of international rankings</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_top_international_rankings_by_country" title="List of top international rankings by country">List of top international rankings by country</a></td> \
	</tr> \
	</table> \
	</td> \
	</tr> \
	</table> \
	<table class="navbox" cellspacing="0" style=";"> \
	<tr> \
	<td style="padding:2px;"> \
	<table cellspacing="0" class="nowraplinks collapsible autocollapse" style="width:100%;background:transparent;color:inherit;;"> \
	<tr> \
	<th style=";" colspan="2" class="navbox-title"><span style="float:left;width:6em;text-align:left;"><span class="noprint plainlinks navbar" style=""><span style="white-space:nowrap;word-spacing:-.12em;"><a href="/wiki/Template:Global_economic_classifications" title="Template:Global economic classifications"><span style=";;background:none transparent;border:none;font-size:100%;" title="View this template">v</span></a> <span style=";;background:none transparent;border:none;font-size:100%;"><b>·</b></span> <a href="/wiki/Template_talk:Global_economic_classifications" title="Template talk:Global economic classifications"><span style=";;background:none transparent;border:none;font-size:100%;" title="Discuss this template">d</span></a> <span style=";;background:none transparent;border:none;font-size:100%;"><b>·</b></span> <a href="http://en.wikipedia.org/w/index.php?title=Template:Global_economic_classifications&amp;action=edit" class="external text" rel="nofollow"><span style=";;background:none transparent;border:none;font-size:100%;" title="Edit this template">e</span></a></span></span></span><span class="" style="font-size:110%;">Economic classification of countries</span></th> \
	</tr> \
	<tr style="height:2px;"> \
	<td></td> \
	</tr> \
	<tr> \
	<td class="navbox-abovebelow" style=";" colspan="2"><a href="/wiki/Developed_country" title="Developed country">Developed country</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/Developing_country" title="Developing country">Developing country</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/Least_Developed_Country" title="Least Developed Country" class="mw-redirect">Least developed country</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/High_income_economy" title="High income economy">High income economy</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/Newly_industrialized_country" title="Newly industrialized country">Newly industrialized country</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/Heavily_Indebted_Poor_Countries" title="Heavily Indebted Poor Countries">Heavily Indebted Poor Countries</a></td> \
	</tr> \
	<tr style="height:2px;"> \
	<td></td> \
	</tr> \
	<tr> \
	<td class="navbox-group" style=";;"><a href="/wiki/Three_Worlds_Theory" title="Three Worlds Theory">Worlds Theory</a></td> \
	<td style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px;text-align:left;;;" class="navbox-list navbox-odd"> \
	<div style="padding:0em 0.25em"><a href="/wiki/First_World" title="First World">First World</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/Second_World" title="Second World">Second World</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/Third_World" title="Third World">Third World</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/Fourth_World" title="Fourth World">Fourth World</a></div> \
	</td> \
	</tr> \
	<tr style="height:2px"> \
	<td></td> \
	</tr> \
	<tr> \
	<td class="navbox-group" style=";;">GDP</td> \
	<td style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px;text-align:left;;;" class="navbox-list navbox-even"> \
	<div style="padding:0em 0.25em"></div> \
	<table cellspacing="0" class="nowraplinks navbox-subgroup" style="width:100%;;;;"> \
	<tr> \
	<td class="navbox-group" style=";padding-left:0em;padding-right:0em;;"> \
	<div style="padding:0em 0.75em;"><strong class="selflink">Nominal</strong></div> \
	</td> \
	<td style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px;;;" class="navbox-list navbox-odd"> \
	<div style="padding:0em 0.25em"><a href="/wiki/List_of_countries_by_GDP_(nominal)" title="List of countries by GDP (nominal)">By country</a> (<a href="/wiki/List_of_countries_by_future_GDP_(nominal)_estimates" title="List of countries by future GDP (nominal) estimates" class="mw-redirect">future estimates</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_countries_by_nominal_GDP_growth_rate" title="List of countries by nominal GDP growth rate">growth</a>&#160;<span style="font-weight:bold;">·</span> <a href="/wiki/List_of_countries_by_GDP_(nominal)_per_capita" title="List of countries by GDP (nominal) per capita">per capita</a> [<a href="/wiki/List_of_countries_by_future_GDP_(nominal)_per_capita_estimates" title="List of countries by future GDP (nominal) per capita estimates" class="mw-redirect">future estimates</a>])</div> \
	</td> \
	</tr> \
	<tr style="height:2px"> \
	<td></td> \
	</tr> \
	<tr> \
	<td class="navbox-group" style=";padding-left:0em;padding-right:0em;;"> \
	<div style="padding:0em 0.75em;"><a href="/wiki/Purchasing_power_parity" title="Purchasing power parity">Purchasing power parity</a> (PPP)</div> \
	</td> \
	<td style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px;;;" class="navbox-list navbox-even"> \
	<div style="padding:0em 0.25em"><a href="/wiki/List_of_countries_by_GDP_(PPP)" title="List of countries by GDP (PPP)">By country</a> (<a href="/wiki/List_of_countries_by_future_GDP_(PPP)_estimates" title="List of countries by future GDP (PPP) estimates">future estimates</a>&#160;<span style="font-weight:bold;">·</span> <a href="/wiki/List_of_countries_by_GDP_(PPP)_per_capita" title="List of countries by GDP (PPP) per capita">per capita</a> [<a href="/wiki/List_of_countries_by_future_GDP_(PPP)_per_capita_estimates" title="List of countries by future GDP (PPP) per capita estimates">future estimates</a>]&#160;<span style="font-weight:bold;">·</span> <a href="/wiki/List_of_countries_by_GDP_(PPP)_per_hour_worked" title="List of countries by GDP (PPP) per hour worked">per hour worked</a>, <a href="/wiki/List_of_countries_by_GDP_(PPP)_per_person_employed" title="List of countries by GDP (PPP) per person employed">per person employed</a>)</div> \
	</td> \
	</tr> \
	</table> \
	</td> \
	</tr> \
	<tr style="height:2px"> \
	<td></td> \
	</tr> \
	<tr> \
	<td class="navbox-group" style=";;"><a href="/wiki/GNI_per_capita" title="GNI per capita" class="mw-redirect">GNI per capita</a></td> \
	<td style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px;text-align:left;;;" class="navbox-list navbox-odd"> \
	<div style="padding:0em 0.25em"><a href="/wiki/List_of_countries_by_GNI_(nominal,_Atlas_method)_per_capita" title="List of countries by GNI (nominal, Atlas method) per capita">List of countries by GNI (nominal) per capita</a>&#160;<span style="font-weight:bold;">·</span> <a href="/wiki/List_of_countries_by_GNI_(PPP)_per_capita" title="List of countries by GNI (PPP) per capita">List of countries by GNI (PPP) per capita</a></div> \
	</td> \
	</tr> \
	<tr style="height:2px"> \
	<td></td> \
	</tr> \
	<tr> \
	<td class="navbox-group" style=";;"><a href="/wiki/Wage" title="Wage">Wages</a></td> \
	<td style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px;text-align:left;;;" class="navbox-list navbox-even"> \
	<div style="padding:0em 0.25em"><a href="/wiki/List_of_countries_by_employee_compensation_(per_hour)" title="List of countries by employee compensation (per hour)">per hour</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_countries_by_monthly_average_wage" title="List of countries by monthly average wage" class="mw-redirect">monthly</a> (<a href="/wiki/List_of_sovereign_states_in_Europe_by_net_average_wage" title="List of sovereign states in Europe by net average wage">Europe</a>) &#160;<span style="font-weight:bold;">·</span> <a href="/wiki/List_of_countries_by_average_wage" title="List of countries by average wage">per year</a> &#160;<span style="font-weight:bold;">·</span> <a href="/wiki/List_of_minimum_wages_by_country" title="List of minimum wages by country">Minimum wage</a> (<a href="/wiki/List_of_sovereign_states_in_Europe_by_minimum_wage" title="List of sovereign states in Europe by minimum wage">Europe</a> &#160;<span style="font-weight:bold;">·</span> <a href="/wiki/List_of_U.S._minimum_wages" title="List of U.S. minimum wages">USA</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_minimum_wages_in_Canada" title="List of minimum wages in Canada">Canada</a>)</div> \
	</td> \
	</tr> \
	<tr style="height:2px"> \
	<td></td> \
	</tr> \
	<tr> \
	<td class="navbox-group" style=";;">Other <a href="/wiki/National_accounts" title="National accounts">national accounts</a></td> \
	<td style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px;text-align:left;;;" class="navbox-list navbox-odd"> \
	<div style="padding:0em 0.25em"><a href="/wiki/Net_material_product" title="Net material product">Net material product</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/National_wealth" title="National wealth">Gross/Net national wealth</a>&#160;<span style="font-weight:bold;">·</span> <a href="/wiki/List_of_countries_by_research_and_development_spending" title="List of countries by research and development spending">Expenditures on R&amp;D</a></div> \
	</td> \
	</tr> \
	<tr style="height:2px"> \
	<td></td> \
	</tr> \
	<tr> \
	<td class="navbox-group" style=";;"><a href="/wiki/Human_development_(humanity)" title="Human development (humanity)">Human development</a></td> \
	<td style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px;text-align:left;;;" class="navbox-list navbox-even"> \
	<div style="padding:0em 0.25em"><a href="/wiki/List_of_countries_by_Human_Development_Index" title="List of countries by Human Development Index">List of countries by Human Development Index</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/Human_Poverty_Index" title="Human Poverty Index">Human Poverty Index</a>&#160;<span style="font-weight:bold;">·</span>  <a href="/wiki/List_of_countries_by_percentage_of_population_living_in_poverty" title="List of countries by percentage of population living in poverty">List of countries by percentage of population living in poverty</a></div> \
	</td> \
	</tr> \
	<tr style="height:2px"> \
	<td></td> \
	</tr> \
	<tr> \
	<td class="navbox-group" style=";;"><a href="/wiki/Digital_divide" title="Digital divide">Digital divide</a></td> \
	<td style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px;text-align:left;;;" class="navbox-list navbox-odd"> \
	<div style="padding:0em 0.25em"><a href="/wiki/Digital_Opportunity_Index" title="Digital Opportunity Index">Digital Opportunity Index</a>&#160;<span style="font-weight:bold;">·</span> <a href="/wiki/List_of_countries_by_number_of_Internet_users" title="List of countries by number of Internet users" class="mw-redirect">List of countries by number of Internet users</a>&#160;<span style="font-weight:bold;">·</span> <a href="/wiki/List_of_countries_by_number_of_broadband_Internet_users" title="List of countries by number of broadband Internet users">List of countries by number of broadband Internet users</a></div> \
	</td> \
	</tr> \
	</table> \
	</td> \
	</tr> \
	</table> \
	<table class="metadata mbox-small plainlinks" style="border:1px solid #aaa; background-color:#f9f9f9;"> \
	<tr> \
	<td class="mbox-image"><img alt="" src="http://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Commons-logo.svg/30px-Commons-logo.svg.png" width="30" height="40" /></td> \
	<td class="mbox-text" style="">Wikimedia Commons has media related to: <i><b><a href="http://commons.wikimedia.org/wiki/Category:Gross_domestic_product" class="extiw" title="commons:Category:Gross domestic product">Gross domestic product</a></b></i></td> \
	</tr> \
	</table> \
	<p><span id="interwiki-de-ga"></span></p> \
	\
	\
	<!-- \
	NewPP limit report\
	Preprocessor node count: 9489/1000000\
	Post-expand include size: 135862/2048000 bytes\
	Template argument size: 59204/2048000 bytes\
	Expensive parser function count: 7/500\
	--> \
	\
	<!-- Saved in parser cache with key enwiki:pcache:idhash:12594-0!1!0!!en!4 and timestamp 20110823054602 --> \
	<div class="printfooter"> \
	Retrieved from "<a href="http://en.wikipedia.org/wiki/Gross_domestic_product">http://en.wikipedia.org/wiki/Gross_domestic_product</a>"</div> \
	<!-- /bodytext --> \
	<!-- catlinks --> \
	<div id=\'catlinks\' class=\'catlinks\'><div id="mw-normal-catlinks"><a href="/wiki/Special:Categories" title="Special:Categories">Categories</a>: <span dir=\'ltr\'><a href="/wiki/Category:Gross_Domestic_Product" title="Category:Gross Domestic Product">Gross Domestic Product</a></span> | <span dir=\'ltr\'><a href="/wiki/Category:National_accounts" title="Category:National accounts">National accounts</a></span></div><div id="mw-hidden-catlinks" class="mw-hidden-cats-hidden">Hidden categories: <span dir=\'ltr\'><a href="/wiki/Category:Articles_to_be_expanded_from_March_2011" title="Category:Articles to be expanded from March 2011">Articles to be expanded from March 2011</a></span> | <span dir=\'ltr\'><a href="/wiki/Category:All_articles_to_be_expanded" title="Category:All articles to be expanded">All articles to be expanded</a></span> | <span dir=\'ltr\'><a href="/wiki/Category:All_articles_with_unsourced_statements" title="Category:All articles with unsourced statements">All articles with unsourced statements</a></span> | <span dir=\'ltr\'><a href="/wiki/Category:Articles_with_unsourced_statements_from_August_2011" title="Category:Articles with unsourced statements from August 2011">Articles with unsourced statements from August 2011</a></span> | <span dir=\'ltr\'><a href="/wiki/Category:Articles_with_unsourced_statements_from_March_2008" title="Category:Articles with unsourced statements from March 2008">Articles with unsourced statements from March 2008</a></span> | <span dir=\'ltr\'><a href="/wiki/Category:Articles_with_unsourced_statements_from_March_2009" title="Category:Articles with unsourced statements from March 2009">Articles with unsourced statements from March 2009</a></span> | <span dir=\'ltr\'><a href="/wiki/Category:Articles_to_be_expanded_from_August_2009" title="Category:Articles to be expanded from August 2009">Articles to be expanded from August 2009</a></span> | <span dir=\'ltr\'><a href="/wiki/Category:Articles_with_unsourced_statements_from_July_2011" title="Category:Articles with unsourced statements from July 2011">Articles with unsourced statements from July 2011</a></span></div></div>				<!-- /catlinks --> \
					<div class="visualClear"></div> \
	</div> \
	<!-- /bodyContent --> \
	</div> \
	<!-- /content --> \
	<!-- header --> \
	<div id="mw-head" class="noprint"> \
	\
	<!-- 0 --> \
	<div id="p-personal" class=""> \
	<h5>Personal tools</h5> \
	<ul> \
	<li  id="pt-login"><a href="/w/index.php?title=Special:UserLogin&amp;returnto=Gross_domestic_product" title="You are encouraged to log in; however, it is not mandatory. [o]" accesskey="o">Log in / create account</a></li> \
	</ul> \
	</div> \
	\
	<!-- /0 --> \
	<div id="left-navigation"> \
	\
	<!-- 0 --> \
	<div id="p-namespaces" class="vectorTabs"> \
	<h5>Namespaces</h5> \
	<ul> \
	<li  id="ca-nstab-main" class="selected"><span><a href="/wiki/Gross_domestic_product"  title="View the content page [c]" accesskey="c">Article</a></span></li> \
	<li  id="ca-talk"><span><a href="/wiki/Talk:Gross_domestic_product"  title="Discussion about the content page [t]" accesskey="t">Discussion</a></span></li> \
	</ul> \
	</div> \
	\
	<!-- /0 --> \
	\
	<!-- 1 --> \
	<div id="p-variants" class="vectorMenu emptyPortlet"> \
	<h5><span>Variants</span><a href="#"></a></h5> \
	<div class="menu"> \
	<ul> \
	</ul> \
	</div> \
	</div> \
	\
	<!-- /1 --> \
	</div> \
	<div id="right-navigation"> \
	\
	<!-- 0 --> \
	<div id="p-views" class="vectorTabs"> \
	<h5>Views</h5> \
	<ul> \
	<li id="ca-view" class="selected"><span><a href="/wiki/Gross_domestic_product" >Read</a></span></li> \
	<li id="ca-edit"><span><a href="/w/index.php?title=Gross_domestic_product&amp;action=edit"  title="You can edit this page. &#10;Please use the preview button before saving. [e]" accesskey="e">Edit</a></span></li> \
	<li id="ca-history" class="collapsible "><span><a href="/w/index.php?title=Gross_domestic_product&amp;action=history"  title="Past versions of this page [h]" accesskey="h">View history</a></span></li> \
	</ul> \
	</div> \
	\
	<!-- /0 --> \
	\
	<!-- 1 --> \
	<div id="p-cactions" class="vectorMenu emptyPortlet"> \
	<h5><span>Actions</span><a href="#"></a></h5> \
	<div class="menu"> \
	<ul> \
	</ul> \
	</div> \
	</div> \
	\
	<!-- /1 --> \
	\
	<!-- 2 --> \
	<div id="p-search"> \
	<h5><label for="searchInput">Search</label></h5> \
	<form action="/w/index.php" id="searchform"> \
	<input type=\'hidden\' name="title" value="Special:Search"/> \
	<div id="simpleSearch"> \
	<input id="searchInput" name="search" type="text"  title="Search Wikipedia [f]" accesskey="f"  value="" /> \
	<button id="searchButton" type=\'submit\' name=\'button\'  title="Search Wikipedia for this text"><img src="http://bits.wikimedia.org/skins-1.17/vector/images/search-ltr.png?301-3" alt="Search" /></button> \
	</div> \
	</form> \
	</div> \
	\
	<!-- /2 --> \
	</div> \
	</div> \
	<!-- /header --> \
	<!-- panel --> \
	<div id="mw-panel" class="noprint"> \
	<!-- logo --> \
	<div id="p-logo"><a style="background-image: url(http://upload.wikimedia.org/wikipedia/en/b/bc/Wiki.png);" href="/wiki/Main_Page"  title="Visit the main page"></a></div> \
	<!-- /logo --> \
	\
	<!-- navigation --> \
	<div class="portal" id=\'p-navigation\'> \
	<h5>Navigation</h5> \
	<div class="body"> \
	<ul> \
	<li id="n-mainpage-description"><a href="/wiki/Main_Page" title="Visit the main page [z]" accesskey="z">Main page</a></li> \
	<li id="n-contents"><a href="/wiki/Portal:Contents" title="Guides to browsing Wikipedia">Contents</a></li> \
	<li id="n-featuredcontent"><a href="/wiki/Portal:Featured_content" title="Featured content – the best of Wikipedia">Featured content</a></li> \
	<li id="n-currentevents"><a href="/wiki/Portal:Current_events" title="Find background information on current events">Current events</a></li> \
	<li id="n-randompage"><a href="/wiki/Special:Random" title="Load a random article [x]" accesskey="x">Random article</a></li> \
	<li id="n-sitesupport"><a href="http://wikimediafoundation.org/wiki/Special:Landingcheck?landing_page=WMFJA085&amp;language=en&amp;utm_source=donate&amp;utm_medium=sidebar&amp;utm_campaign=20101204SB002" title="Support us">Donate to Wikipedia</a></li> \
	</ul> \
	</div> \
	</div> \
	\
	<!-- /navigation --> \
	\
	<!-- SEARCH --> \
	\
	<!-- /SEARCH --> \
	\
	<!-- interaction --> \
	<div class="portal" id=\'p-interaction\'> \
	<h5>Interaction</h5> \
	<div class="body"> \
	<ul> \
	<li id="n-help"><a href="/wiki/Help:Contents" title="Guidance on how to use and edit Wikipedia">Help</a></li> \
	<li id="n-aboutsite"><a href="/wiki/Wikipedia:About" title="Find out about Wikipedia">About Wikipedia</a></li> \
	<li id="n-portal"><a href="/wiki/Wikipedia:Community_portal" title="About the project, what you can do, where to find things">Community portal</a></li> \
	<li id="n-recentchanges"><a href="/wiki/Special:RecentChanges" title="The list of recent changes in the wiki [r]" accesskey="r">Recent changes</a></li> \
	<li id="n-contact"><a href="/wiki/Wikipedia:Contact_us" title="How to contact Wikipedia">Contact Wikipedia</a></li> \
	</ul> \
	</div> \
	</div> \
	\
	<!-- /interaction --> \
	\
	<!-- TOOLBOX --> \
	<div class="portal" id="p-tb"> \
	<h5>Toolbox</h5> \
	<div class="body"> \
	<ul> \
	<li id="t-whatlinkshere"><a href="/wiki/Special:WhatLinksHere/Gross_domestic_product" title="List of all English Wikipedia pages containing links to this page [j]" accesskey="j">What links here</a></li> \
	<li id="t-recentchangeslinked"><a href="/wiki/Special:RecentChangesLinked/Gross_domestic_product" title="Recent changes in pages linked from this page [k]" accesskey="k">Related changes</a></li> \
																														<li id="t-upload"><a href="/wiki/Wikipedia:Upload" title="Upload files [u]" accesskey="u">Upload file</a></li> \
				<li id="t-specialpages"><a href="/wiki/Special:SpecialPages" title="List of all special pages [q]" accesskey="q">Special pages</a></li> \
				<li id="t-permalink"><a href="/w/index.php?title=Gross_domestic_product&amp;oldid=446272489" title="Permanent link to this revision of the page">Permanent link</a></li> \
	<li id="t-cite"><a href="/w/index.php?title=Special:Cite&amp;page=Gross_domestic_product&amp;id=446272489" title="Information on how to cite this page">Cite this page</a></li>		</ul> \
	</div> \
	</div> \
	\
	<!-- /TOOLBOX --> \
	\
	<!-- coll-print_export --> \
	<div class="portal" id=\'p-coll-print_export\'> \
	<h5>Print/export</h5> \
	<div class="body"> \
	<ul id="collectionPortletList"><li id="coll-create_a_book"><a href="/w/index.php?title=Special:Book&amp;bookcmd=book_creator&amp;referer=Gross+domestic+product" title="Create a book or page collection" rel="nofollow">Create a book</a></li><li id="coll-download-as-rl"><a href="/w/index.php?title=Special:Book&amp;bookcmd=render_article&amp;arttitle=Gross+domestic+product&amp;oldid=446272489&amp;writer=rl" title="Download a PDF version of this wiki page" rel="nofollow">Download as PDF</a></li><li id="t-print"><a href="/w/index.php?title=Gross_domestic_product&amp;printable=yes" title="Printable version of this page [p]" accesskey="p">Printable version</a></li></ul>			</div> \
	</div> \
	\
	<!-- /coll-print_export --> \
	\
	<!-- LANGUAGES --> \
	<div class="portal" id="p-lang"> \
	<h5>Languages</h5> \
	<div class="body"> \
	<ul> \
	<li class="interwiki-af"><a href="http://af.wikipedia.org/wiki/Bruto_binnelandse_produk" title="Bruto binnelandse produk">Afrikaans</a></li> \
	<li class="interwiki-ar"><a href="http://ar.wikipedia.org/wiki/%D9%86%D8%A7%D8%AA%D8%AC_%D9%85%D8%AD%D9%84%D9%8A_%D8%A5%D8%AC%D9%85%D8%A7%D9%84%D9%8A" title="ناتج محلي إجمالي">العربية</a></li> \
	<li class="interwiki-an"><a href="http://an.wikipedia.org/wiki/Producto_Interior_Bruto" title="Producto Interior Bruto">Aragonés</a></li> \
	<li class="interwiki-az"><a href="http://az.wikipedia.org/wiki/%C3%9Cmumi_Daxili_M%C9%99hsul" title="Ümumi Daxili Məhsul">Azərbaycanca</a></li> \
	<li class="interwiki-bm"><a href="http://bm.wikipedia.org/wiki/Bakrunba_Sok%C9%94n%C9%94_Karajago" title="Bakrunba Sokɔnɔ Karajago">Bamanankan</a></li> \
	<li class="interwiki-bn"><a href="http://bn.wikipedia.org/wiki/%E0%A6%AE%E0%A7%8B%E0%A6%9F_%E0%A6%85%E0%A6%AD%E0%A7%8D%E0%A6%AF%E0%A6%A8%E0%A7%8D%E0%A6%A4%E0%A6%B0%E0%A7%80%E0%A6%A3_%E0%A6%89%E0%A7%8E%E0%A6%AA%E0%A6%BE%E0%A6%A6%E0%A6%A8" title="মোট অভ্যন্তরীণ উৎপাদন">বাংলা</a></li> \
	<li class="interwiki-zh-min-nan"><a href="http://zh-min-nan.wikipedia.org/wiki/Kok-l%C4%81i_ch%C3%B3ng_seng-s%C3%A1n" title="Kok-lāi chóng seng-sán">Bân-lâm-gú</a></li> \
	<li class="interwiki-be"><a href="http://be.wikipedia.org/wiki/%D0%92%D0%B0%D0%BB%D0%B0%D0%B2%D1%8B_%D1%9E%D0%BD%D1%83%D1%82%D1%80%D0%B0%D0%BD%D1%8B_%D0%BF%D1%80%D0%B0%D0%B4%D1%83%D0%BA%D1%82" title="Валавы ўнутраны прадукт">Беларуская</a></li> \
	<li class="interwiki-be-x-old"><a href="http://be-x-old.wikipedia.org/wiki/%D0%A1%D1%83%D0%BA%D1%83%D0%BF%D0%BD%D1%8B_%D1%9E%D0%BD%D1%83%D1%82%D1%80%D0%B0%D0%BD%D1%8B_%D0%BF%D1%80%D0%B0%D0%B4%D1%83%D0%BA%D1%82" title="Сукупны ўнутраны прадукт">‪Беларуская (тарашкевіца)‬</a></li> \
	<li class="interwiki-bar"><a href="http://bar.wikipedia.org/wiki/Bruttoinlandsprodukt" title="Bruttoinlandsprodukt">Boarisch</a></li> \
	<li class="interwiki-bs"><a href="http://bs.wikipedia.org/wiki/Bruto_doma%C4%87i_proizvod" title="Bruto domaći proizvod">Bosanski</a></li> \
	<li class="interwiki-bg"><a href="http://bg.wikipedia.org/wiki/%D0%91%D1%80%D1%83%D1%82%D0%B5%D0%BD_%D0%B2%D1%8A%D1%82%D1%80%D0%B5%D1%88%D0%B5%D0%BD_%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82" title="Брутен вътрешен продукт">Български</a></li> \
	<li class="interwiki-ca"><a href="http://ca.wikipedia.org/wiki/Producte_interior_brut" title="Producte interior brut">Català</a></li> \
	<li class="interwiki-cs"><a href="http://cs.wikipedia.org/wiki/Hrub%C3%BD_dom%C3%A1c%C3%AD_produkt" title="Hrubý domácí produkt">Česky</a></li> \
	<li class="interwiki-cy"><a href="http://cy.wikipedia.org/wiki/Cynnyrch_mewnwladol_crynswth" title="Cynnyrch mewnwladol crynswth">Cymraeg</a></li> \
	<li class="interwiki-da"><a href="http://da.wikipedia.org/wiki/BNI_per_indbygger" title="BNI per indbygger">Dansk</a></li> \
	<li class="interwiki-de"><a href="http://de.wikipedia.org/wiki/Bruttoinlandsprodukt" title="Bruttoinlandsprodukt">Deutsch</a></li> \
	<li class="interwiki-et"><a href="http://et.wikipedia.org/wiki/Sisemajanduse_kogutoodang" title="Sisemajanduse kogutoodang">Eesti</a></li> \
	<li class="interwiki-el"><a href="http://el.wikipedia.org/wiki/%CE%91%CE%BA%CE%B1%CE%B8%CE%AC%CF%81%CE%B9%CF%83%CF%84%CE%BF_%CE%95%CE%B3%CF%87%CF%8E%CF%81%CE%B9%CE%BF_%CE%A0%CF%81%CE%BF%CF%8A%CF%8C%CE%BD" title="Ακαθάριστο Εγχώριο Προϊόν">Ελληνικά</a></li> \
	<li class="interwiki-es"><a href="http://es.wikipedia.org/wiki/Producto_interno_bruto" title="Producto interno bruto">Español</a></li> \
	<li class="interwiki-eo"><a href="http://eo.wikipedia.org/wiki/Malneta_enlanda_produkto" title="Malneta enlanda produkto">Esperanto</a></li> \
	<li class="interwiki-eu"><a href="http://eu.wikipedia.org/wiki/Barne_Produktu_Gordin" title="Barne Produktu Gordin">Euskara</a></li> \
	<li class="interwiki-fa"><a href="http://fa.wikipedia.org/wiki/%D8%AA%D9%88%D9%84%DB%8C%D8%AF_%D9%86%D8%A7%D8%AE%D8%A7%D9%84%D8%B5_%D8%AF%D8%A7%D8%AE%D9%84%DB%8C" title="تولید ناخالص داخلی">فارسی</a></li> \
	<li class="interwiki-fr"><a href="http://fr.wikipedia.org/wiki/Produit_int%C3%A9rieur_brut" title="Produit intérieur brut">Français</a></li> \
	<li class="interwiki-ga"><a href="http://ga.wikipedia.org/wiki/Ollt%C3%A1irgeacht_int%C3%ADre" title="Olltáirgeacht intíre">Gaeilge</a></li> \
	<li class="interwiki-gv"><a href="http://gv.wikipedia.org/wiki/Lane_troar_sthie" title="Lane troar sthie">Gaelg</a></li> \
	<li class="interwiki-gd"><a href="http://gd.wikipedia.org/wiki/L%C3%A0n-thoradh_D%C3%B9thchail" title="Làn-thoradh Dùthchail">Gàidhlig</a></li> \
	<li class="interwiki-gl"><a href="http://gl.wikipedia.org/wiki/Produto_Interior_Bruto" title="Produto Interior Bruto">Galego</a></li> \
	<li class="interwiki-ko"><a href="http://ko.wikipedia.org/wiki/%EA%B5%AD%EB%82%B4_%EC%B4%9D%EC%83%9D%EC%82%B0" title="국내 총생산">한국어</a></li> \
	<li class="interwiki-hy"><a href="http://hy.wikipedia.org/wiki/%D5%80%D5%A1%D5%B4%D5%A1%D5%AD%D5%A1%D5%BC%D5%B6_%D5%B6%D5%A5%D6%80%D6%84%D5%AB%D5%B6_%D5%A1%D6%80%D5%A4%D5%B5%D5%B8%D6%82%D5%B6%D6%84" title="Համախառն ներքին արդյունք">Հայերեն</a></li> \
	<li class="interwiki-hi"><a href="http://hi.wikipedia.org/wiki/%E0%A4%B8%E0%A4%95%E0%A4%B2_%E0%A4%98%E0%A4%B0%E0%A5%87%E0%A4%B2%E0%A5%82_%E0%A4%89%E0%A4%A4%E0%A5%8D%E0%A4%AA%E0%A4%BE%E0%A4%A6" title="सकल घरेलू उत्पाद">हिन्दी</a></li> \
	<li class="interwiki-hr"><a href="http://hr.wikipedia.org/wiki/Bruto_doma%C4%87i_proizvod" title="Bruto domaći proizvod">Hrvatski</a></li> \
	<li class="interwiki-io"><a href="http://io.wikipedia.org/wiki/Kuntara_landala_produkto" title="Kuntara landala produkto">Ido</a></li> \
	<li class="interwiki-id"><a href="http://id.wikipedia.org/wiki/Produk_domestik_bruto" title="Produk domestik bruto">Bahasa Indonesia</a></li> \
	<li class="interwiki-is"><a href="http://is.wikipedia.org/wiki/Landsframlei%C3%B0sla" title="Landsframleiðsla">Íslenska</a></li> \
	<li class="interwiki-it"><a href="http://it.wikipedia.org/wiki/Prodotto_interno_lordo" title="Prodotto interno lordo">Italiano</a></li> \
	<li class="interwiki-he"><a href="http://he.wikipedia.org/wiki/%D7%AA%D7%95%D7%A6%D7%A8_%D7%9E%D7%A7%D7%95%D7%9E%D7%99_%D7%92%D7%95%D7%9C%D7%9E%D7%99" title="תוצר מקומי גולמי">עברית</a></li> \
	<li class="interwiki-jv"><a href="http://jv.wikipedia.org/wiki/Prodhuk_dom%C3%A8stik_bruto" title="Prodhuk domèstik bruto">Basa Jawa</a></li> \
	<li class="interwiki-kn"><a href="http://kn.wikipedia.org/wiki/%E0%B2%B0%E0%B2%BE%E0%B2%B7%E0%B3%8D%E0%B2%9F%E0%B3%8D%E0%B2%B0%E0%B3%80%E0%B2%AF_%E0%B2%89%E0%B2%A4%E0%B3%8D%E0%B2%AA%E0%B2%A8%E0%B3%8D%E0%B2%A8" title="ರಾಷ್ಟ್ರೀಯ ಉತ್ಪನ್ನ">ಕನ್ನಡ</a></li> \
	<li class="interwiki-krc"><a href="http://krc.wikipedia.org/wiki/%D0%91%D1%8E%D1%82%D0%B5%D1%83%D0%BB%D1%8E%D0%BA_%D0%B8%D1%87_%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82" title="Бютеулюк ич продукт">Къарачай-Малкъар</a></li> \
	<li class="interwiki-ka"><a href="http://ka.wikipedia.org/wiki/%E1%83%9B%E1%83%97%E1%83%9A%E1%83%98%E1%83%90%E1%83%9C%E1%83%98_%E1%83%A8%E1%83%98%E1%83%93%E1%83%90_%E1%83%9E%E1%83%A0%E1%83%9D%E1%83%93%E1%83%A3%E1%83%A5%E1%83%A2%E1%83%98" title="მთლიანი შიდა პროდუქტი">ქართული</a></li> \
	<li class="interwiki-kk"><a href="http://kk.wikipedia.org/wiki/%D0%96%D0%B0%D0%BB%D0%BF%D1%8B_%D1%96%D1%88%D0%BA%D1%96_%D3%A9%D0%BD%D1%96%D0%BC" title="Жалпы ішкі өнім">Қазақша</a></li> \
	<li class="interwiki-ky"><a href="http://ky.wikipedia.org/wiki/%D0%98%D0%94%D0%9F" title="ИДП">Кыргызча</a></li> \
	<li class="interwiki-lo"><a href="http://lo.wikipedia.org/wiki/%E0%BA%A5%E0%BA%A7%E0%BA%A1%E0%BA%8D%E0%BA%AD%E0%BA%94%E0%BA%9C%E0%BA%B0%E0%BA%A5%E0%BA%B4%E0%BA%94%E0%BA%95%E0%BA%B0%E0%BA%9E%E0%BA%B1%E0%BA%99%E0%BA%9E%E0%BA%B2%E0%BA%8D%E0%BB%83%E0%BA%99" title="ລວມຍອດຜະລິດຕະພັນພາຍໃນ">ລາວ</a></li> \
	<li class="interwiki-la"><a href="http://la.wikipedia.org/wiki/Productus_domesticus_grossus" title="Productus domesticus grossus">Latina</a></li> \
	<li class="interwiki-lv"><a href="http://lv.wikipedia.org/wiki/Iek%C5%A1zemes_kopprodukts" title="Iekšzemes kopprodukts">Latviešu</a></li> \
	<li class="interwiki-lt"><a href="http://lt.wikipedia.org/wiki/Bendrasis_vidaus_produktas" title="Bendrasis vidaus produktas">Lietuvių</a></li> \
	<li class="interwiki-hu"><a href="http://hu.wikipedia.org/wiki/Brutt%C3%B3_hazai_term%C3%A9k" title="Bruttó hazai termék">Magyar</a></li> \
	<li class="interwiki-mk"><a href="http://mk.wikipedia.org/wiki/%D0%91%D1%80%D1%83%D1%82%D0%BE_%D0%B4%D0%BE%D0%BC%D0%B0%D1%88%D0%B5%D0%BD_%D0%BF%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4" title="Бруто домашен производ">Македонски</a></li> \
	<li class="interwiki-mr"><a href="http://mr.wikipedia.org/wiki/%E0%A4%B5%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%B7%E0%A4%BF%E0%A4%95_%E0%A4%B8%E0%A4%95%E0%A4%B2_%E0%A4%89%E0%A4%A4%E0%A5%8D%E0%A4%AA%E0%A4%A8%E0%A5%8D%E0%A4%A8" title="वार्षिक सकल उत्पन्न">मराठी</a></li> \
	<li class="interwiki-arz"><a href="http://arz.wikipedia.org/wiki/%D9%86%D8%A7%D8%AA%D8%AC_%D9%85%D8%AD%D9%84%D9%89_%D8%A7%D8%AC%D9%85%D8%A7%D9%84%D9%89" title="ناتج محلى اجمالى">مصرى</a></li> \
	<li class="interwiki-ms"><a href="http://ms.wikipedia.org/wiki/Keluaran_dalam_negara_kasar" title="Keluaran dalam negara kasar">Bahasa Melayu</a></li> \
	<li class="interwiki-cdo"><a href="http://cdo.wikipedia.org/wiki/Gu%C3%B3k-n%C3%B4%CC%A4i_s%C4%95ng-s%C4%81ng_c%C5%ABng-d%C4%ADk" title="Guók-nô̤i sĕng-sāng cūng-dĭk">Mìng-dĕ̤ng-ngṳ̄</a></li> \
	<li class="interwiki-mn"><a href="http://mn.wikipedia.org/wiki/%D0%94%D0%BE%D1%82%D0%BE%D0%BE%D0%B4%D1%8B%D0%BD_%D0%BD%D0%B8%D0%B9%D1%82_%D0%B1%D2%AF%D1%82%D1%8D%D1%8D%D0%B3%D0%B4%D1%8D%D1%85%D2%AF%D2%AF%D0%BD" title="Дотоодын нийт бүтээгдэхүүн">Монгол</a></li> \
	<li class="interwiki-my"><a href="http://my.wikipedia.org/wiki/%E1%80%85%E1%80%AF%E1%80%85%E1%80%AF%E1%80%95%E1%80%B1%E1%80%AB%E1%80%84%E1%80%BA%E1%80%B8_%E1%80%95%E1%80%BC%E1%80%8A%E1%80%BA%E1%80%90%E1%80%BD%E1%80%84%E1%80%BA%E1%80%B8%E1%80%91%E1%80%AF%E1%80%90%E1%80%BA%E1%80%9C%E1%80%AF%E1%80%95%E1%80%BA%E1%80%99%E1%80%BE%E1%80%AF" title="စုစုပေါင်း ပြည်တွင်းထုတ်လုပ်မှု">မြန်မာဘာသာ</a></li> \
	<li class="interwiki-nl"><a href="http://nl.wikipedia.org/wiki/Bruto_binnenlands_product" title="Bruto binnenlands product">Nederlands</a></li> \
	<li class="interwiki-ja"><a href="http://ja.wikipedia.org/wiki/%E5%9B%BD%E5%86%85%E7%B7%8F%E7%94%9F%E7%94%A3" title="国内総生産">日本語</a></li> \
	<li class="interwiki-oc"><a href="http://oc.wikipedia.org/wiki/Produch_interior_brut" title="Produch interior brut">Occitan</a></li> \
	<li class="interwiki-nds"><a href="http://nds.wikipedia.org/wiki/Bruttobinnenlandprodukt" title="Bruttobinnenlandprodukt">Plattdüütsch</a></li> \
	<li class="interwiki-pl"><a href="http://pl.wikipedia.org/wiki/Produkt_krajowy_brutto" title="Produkt krajowy brutto">Polski</a></li> \
	<li class="interwiki-pt"><a href="http://pt.wikipedia.org/wiki/Produto_interno_bruto" title="Produto interno bruto">Português</a></li> \
	<li class="interwiki-ro"><a href="http://ro.wikipedia.org/wiki/Produs_intern_brut" title="Produs intern brut">Română</a></li> \
	<li class="interwiki-ru"><a href="http://ru.wikipedia.org/wiki/%D0%92%D0%B0%D0%BB%D0%BE%D0%B2%D0%BE%D0%B9_%D0%B2%D0%BD%D1%83%D1%82%D1%80%D0%B5%D0%BD%D0%BD%D0%B8%D0%B9_%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82" title="Валовой внутренний продукт">Русский</a></li> \
	<li class="interwiki-sah"><a href="http://sah.wikipedia.org/wiki/%D0%91%D1%80%D1%83%D1%82%D1%82%D0%BE_%D0%B8%D1%81_%D0%BE%D2%A5%D0%BEh%D1%83%D0%BA" title="Брутто ис оҥоhук">Саха тыла</a></li> \
	<li class="interwiki-sq"><a href="http://sq.wikipedia.org/wiki/Bruto_prodhimi_vendor" title="Bruto prodhimi vendor">Shqip</a></li> \
	<li class="interwiki-scn"><a href="http://scn.wikipedia.org/wiki/Prudottu_Nternu_Lordu" title="Prudottu Nternu Lordu">Sicilianu</a></li> \
	<li class="interwiki-simple"><a href="http://simple.wikipedia.org/wiki/Gross_domestic_product" title="Gross domestic product">Simple English</a></li> \
	<li class="interwiki-sk"><a href="http://sk.wikipedia.org/wiki/Hrub%C3%BD_dom%C3%A1ci_produkt" title="Hrubý domáci produkt">Slovenčina</a></li> \
	<li class="interwiki-sl"><a href="http://sl.wikipedia.org/wiki/Bruto_doma%C4%8Di_proizvod" title="Bruto domači proizvod">Slovenščina</a></li> \
	<li class="interwiki-sr"><a href="http://sr.wikipedia.org/wiki/%D0%91%D1%80%D1%83%D1%82%D0%BE_%D0%B4%D0%BE%D0%BC%D0%B0%D1%9B%D0%B8_%D0%BF%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4" title="Бруто домаћи производ">Српски / Srpski</a></li> \
	<li class="interwiki-fi"><a href="http://fi.wikipedia.org/wiki/Bruttokansantuote" title="Bruttokansantuote">Suomi</a></li> \
	<li class="interwiki-tl"><a href="http://tl.wikipedia.org/wiki/Pangkalahatang_produktong_domestiko" title="Pangkalahatang produktong domestiko">Tagalog</a></li> \
	<li class="interwiki-ta"><a href="http://ta.wikipedia.org/wiki/%E0%AE%AE%E0%AF%8A%E0%AE%A4%E0%AF%8D%E0%AE%A4_%E0%AE%89%E0%AE%B3%E0%AF%8D%E0%AE%A8%E0%AE%BE%E0%AE%9F%E0%AF%8D%E0%AE%9F%E0%AF%81_%E0%AE%89%E0%AE%B1%E0%AF%8D%E0%AE%AA%E0%AE%A4%E0%AF%8D%E0%AE%A4%E0%AE%BF" title="மொத்த உள்நாட்டு உற்பத்தி">தமிழ்</a></li> \
	<li class="interwiki-te"><a href="http://te.wikipedia.org/wiki/%E0%B0%B8%E0%B1%8D%E0%B0%A5%E0%B1%82%E0%B0%B2_%E0%B0%A6%E0%B1%87%E0%B0%B6%E0%B1%80%E0%B0%AF%E0%B1%8B%E0%B0%A4%E0%B1%8D%E0%B0%AA%E0%B0%A4%E0%B1%8D%E0%B0%A4%E0%B0%BF" title="స్థూల దేశీయోత్పత్తి">తెలుగు</a></li> \
	<li class="interwiki-th"><a href="http://th.wikipedia.org/wiki/%E0%B8%9C%E0%B8%A5%E0%B8%B4%E0%B8%95%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%E0%B8%A1%E0%B8%A7%E0%B8%A5%E0%B8%A3%E0%B8%A7%E0%B8%A1%E0%B9%83%E0%B8%99%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%97%E0%B8%A8" title="ผลิตภัณฑ์มวลรวมในประเทศ">ไทย</a></li> \
	<li class="interwiki-tr"><a href="http://tr.wikipedia.org/wiki/Gayr%C4%B1saf%C3%AE_yurti%C3%A7i_h%C3%A2s%C4%B1la" title="Gayrısafî yurtiçi hâsıla">Türkçe</a></li> \
	<li class="interwiki-udm"><a href="http://udm.wikipedia.org/wiki/%D0%92%D0%92%D0%9F" title="ВВП">Удмурт</a></li> \
	<li class="interwiki-uk"><a href="http://uk.wikipedia.org/wiki/%D0%92%D0%B0%D0%BB%D0%BE%D0%B2%D0%B8%D0%B9_%D0%B2%D0%BD%D1%83%D1%82%D1%80%D1%96%D1%88%D0%BD%D1%96%D0%B9_%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82" title="Валовий внутрішній продукт">Українська</a></li> \
	<li class="interwiki-ur"><a href="http://ur.wikipedia.org/wiki/%D8%AE%D8%A7%D9%85_%D9%85%D9%84%DA%A9%DB%8C_%D9%BE%DB%8C%D8%AF%D8%A7%D9%88%D8%A7%D8%B1" title="خام ملکی پیداوار">اردو</a></li> \
	<li class="interwiki-ug"><a href="http://ug.wikipedia.org/wiki/%D9%85%D9%89%D9%84%D9%84%D9%89_%D8%AF%D8%A7%D8%B1%D8%A7%D9%85%DB%95%D8%AA" title="مىللى دارامەت">ئۇيغۇرچە / Uyghurche‎</a></li> \
	<li class="interwiki-vec"><a href="http://vec.wikipedia.org/wiki/PIL" title="PIL">Vèneto</a></li> \
	<li class="interwiki-vi"><a href="http://vi.wikipedia.org/wiki/T%E1%BB%95ng_s%E1%BA%A3n_ph%E1%BA%A9m_n%E1%BB%99i_%C4%91%E1%BB%8Ba" title="Tổng sản phẩm nội địa">Tiếng Việt</a></li> \
	<li class="interwiki-yi"><a href="http://yi.wikipedia.org/wiki/%D7%91%D7%A8%D7%95%D7%98%D7%90_%D7%90%D7%99%D7%A0%D7%9C%D7%A2%D7%A0%D7%93%D7%99%D7%A9%D7%A2%D7%A8_%D7%A4%D7%A8%D7%90%D7%93%D7%95%D7%A7%D7%98" title="ברוטא אינלענדישער פראדוקט">ייִדיש</a></li> \
	<li class="interwiki-yo"><a href="http://yo.wikipedia.org/wiki/Gbogbo_%C3%8Cpaw%C3%B3_Or%C3%ADl%E1%BA%B9%CC%80-%C3%A8d%C3%A8" title="Gbogbo Ìpawó Orílẹ̀-èdè">Yorùbá</a></li> \
	<li class="interwiki-zh"><a href="http://zh.wikipedia.org/wiki/%E5%9B%BD%E5%86%85%E7%94%9F%E4%BA%A7%E6%80%BB%E5%80%BC" title="国内生产总值">中文</a></li> \
	</ul> \
	</div> \
	</div> \
	\
	<!-- /LANGUAGES --> \
	</div> \
	<!-- /panel --> \
	<!-- footer --> \
	<div id="footer"> \
				<ul id="footer-info"> \
										<li id="footer-info-lastmod"> This page was last modified on 23 August 2011 at 05:46.<br /></li> \
																<li id="footer-info-copyright">Text is available under the <a rel="license" href="http://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License">Creative Commons Attribution-ShareAlike License</a><a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/" style="display:none;"></a>;\
	additional terms may apply.\
	See <a href="http://wikimediafoundation.org/wiki/Terms_of_use">Terms of use</a> for details.<br/> \
	Wikipedia&reg; is a registered trademark of the <a href="http://www.wikimediafoundation.org/">Wikimedia Foundation, Inc.</a>, a non-profit organization.<br /></li><li class="noprint"><a class=\'internal\' href="http://en.wikipedia.org/wiki/Wikipedia:Contact_us">Contact us</a></li> \
								</ul> \
								<ul id="footer-places"> \
										<li id="footer-places-privacy"><a href="http://wikimediafoundation.org/wiki/Privacy_policy" title="wikimedia:Privacy policy">Privacy policy</a></li> \
																<li id="footer-places-about"><a href="/wiki/Wikipedia:About" title="Wikipedia:About">About Wikipedia</a></li> \
																<li id="footer-places-disclaimer"><a href="/wiki/Wikipedia:General_disclaimer" title="Wikipedia:General disclaimer">Disclaimers</a></li> \
																<li id="footer-places-mobileview"><a href=\'/w/index.php?title=Gross_domestic_product&amp;useformat=mobile\'>Mobile view</a></li> \
								</ul> \
				<ul id="footer-icons" class="noprint"> \
	<li id="footer-copyrightico"> \
	<a href="http://wikimediafoundation.org/"><img src="http://bits.wikimedia.org/images/wikimedia-button.png" width="88" height="31" alt="Wikimedia Foundation"/></a> \
	</li> \
	<li id="footer-poweredbyico"> \
	<a href="http://www.mediawiki.org/"><img src="http://bits.wikimedia.org/skins-1.17/common/images/poweredby_mediawiki_88x31.png" alt="Powered by MediaWiki" width="88" height="31" /></a> \
	</li> \
	</ul> \
	<div style="clear:both"></div> \
	</div> \
	<!-- /footer --> \
	<script type="text/javascript">if ( window.mediaWiki ) {\
	mediaWiki.loader.load(["mediawiki.legacy.wikibits", "mediawiki.util", "mediawiki.legacy.ajax", "mediawiki.legacy.mwsuggest", "ext.vector.collapsibleNav", "ext.vector.collapsibleTabs", "ext.vector.editWarning", "ext.vector.simpleSearch", "ext.UserBuckets", "ext.articleFeedback.startup"]);\
	mediaWiki.loader.go();\
	}\
	</script> \
	\
	<script src="/w/index.php?title=Special:BannerController&amp;cache=/cn.js&amp;301-3" type="text/javascript"></script> \
	<script src="http://bits.wikimedia.org/en.wikipedia.org/load.php?debug=false&amp;lang=en&amp;modules=site&amp;only=scripts&amp;skin=vector" type="text/javascript"></script> \
	<script type="text/javascript">if ( window.mediaWiki ) {\
	mediaWiki.user.options.set({"ccmeonemails":0,"cols":80,"contextchars":50,"contextlines":5,"date":"default","diffonly":0,"disablemail":0,"disablesuggest":0,"editfont":"default","editondblclick":0,"editsection":1,"editsectiononrightclick":0,"enotifminoredits":0,"enotifrevealaddr":0,"enotifusertalkpages":1,"enotifwatchlistpages":0,"extendwatchlist":0,"externaldiff":0,"externaleditor":0,"fancysig":0,"forceeditsummary":0,"gender":"unknown","hideminor":0,"hidepatrolled":0,"highlightbroken":1,"imagesize":2,"justify":0,"math":1,"minordefault":0,"newpageshidepatrolled":0,"nocache":0,"noconvertlink":0,"norollbackdiff":0,"numberheadings":0,"previewonfirst":0,"previewontop":1,"quickbar":1,"rcdays":7,"rclimit":50,"rememberpassword":0,"rows":25,"searchlimit":20,"showhiddencats":false,"showjumplinks":1,"shownumberswatching":1,"showtoc":1,"showtoolbar":1,"skin":"vector","stubthreshold":0,"thumbsize":4,"underline":2,"uselivepreview":0,"usenewrc":0,"watchcreations":1,"watchdefault":0,"watchdeletion":0,\
	"watchlistdays":"3","watchlisthideanons":0,"watchlisthidebots":0,"watchlisthideliu":0,"watchlisthideminor":0,"watchlisthideown":0,"watchlisthidepatrolled":0,"watchmoves":0,"wllimit":250,"flaggedrevssimpleui":1,"flaggedrevsstable":false,"flaggedrevseditdiffs":true,"flaggedrevsviewdiffs":false,"vector-simplesearch":1,"useeditwarning":1,"vector-collapsiblenav":1,"usebetatoolbar":1,"usebetatoolbar-cgd":1,"wikilove-enabled":1,"variant":"en","language":"en","searchNs0":true,"searchNs1":false,"searchNs2":false,"searchNs3":false,"searchNs4":false,"searchNs5":false,"searchNs6":false,"searchNs7":false,"searchNs8":false,"searchNs9":false,"searchNs10":false,"searchNs11":false,"searchNs12":false,"searchNs13":false,"searchNs14":false,"searchNs15":false,"searchNs100":false,"searchNs101":false,"searchNs108":false,"searchNs109":false});;mediaWiki.loader.state({"user.options":"ready"});\
	}\
	</script><script type="text/javascript" src="http://geoiplookup.wikimedia.org/"></script>		<!-- fixalpha --> \
	<script type="text/javascript"> if ( window.isMSIE55 ) fixalpha(); </script> \
	<!-- /fixalpha --> \
	<!-- Served by srv195 in 0.056 secs. --></body>';

	// list of text to search through the content
	var array = [ 'agriculture', 'cash surplus/deficit', 'cash surplus',
			'cash deficit', 'goods and services', 'gross domestic product',
			'GDP', 'gross capital', 'industry', 'inflation', 'GDP deflator',
			'revenue', 'services', 'manufacturing', 'rural population',
			'urban population', 'agricultural land', 'CO2',
			'power consumption', 'energy use', 'forest area',
			'sanitation facilities', 'water source', 'freshwater resources',
			'debt', 'foreign investment', 'merchandise', 'net migration',
			'official development assistance', 'official aid',
			'workers\'\' remittances', 'workers remittances',
			'worker remittance', 'compensation of employees',
			'employee compensation', 'employees compensations',
			'employees\'\' compensations', 'adolescent fertility',
			'births attended', 'attended births', 'attended birth',
			'contraception', 'contraceptive', 'fertility rate', 'measles',
			'income share', 'life expectancy', 'malnutrition',
			'infant mortality', 'AIDS', 'HIV', 'primary completion rate',
			'primary and secondary education', 'primary education',
			'secondary education', 'IMF', 'international monetary fund',
			'research', 'R&D', 'high-technology', 'internet users',
			'market capitalization', 'stock market', 'military',
			'health expenditure', 'mobile cellular', 'mobile phone',
			'roads, paved', 'paved roads', 'start a business',
			'start business', 'GNI', 'gross national income',
			'population growth', 'population, total', 'population total',
			'total population', 'population density', 'poverty', 'surface area' ];

	var iterations = 2;
	for ( var iteration = 0; iteration < iterations; iteration++) {
		var start = new Date().getTime();
		for ( var i = 0; i < array.length; i++) {
			if (functionToCall === TrouveurFunctions.replace) {
				Trouveur[functionToCall](array[i], 'Hello World!', html);
			} else {
				Trouveur[functionToCall](array[i], html);
			}
		}
		var end = new Date().getTime();
		var score = end - start;
		jstestdriver.console.log(score);
	}
};

TrouveurPerformanceTest.prototype.testFindPerformanceUsingWikipediaPage = function() {
	jstestdriver.console.log('');
	jstestdriver.console.log('--- Trouveur.find ---');
	runnerPerformanceUsingWikipediaPage(TrouveurFunctions.find);
};

TrouveurPerformanceTest.prototype.testReplacePerformanceUsingWikipediaPage = function() {
	jstestdriver.console.log('');
	jstestdriver.console.log('--- Trouveur.replace ---');
	runnerPerformanceUsingWikipediaPage(TrouveurFunctions.replace);
};

TrouveurPerformanceTest.prototype.testCountPerformanceUsingWikipediaPage = function() {
	jstestdriver.console.log('');
	jstestdriver.console.log('--- Trouveur.count ---');
	runnerPerformanceUsingWikipediaPage(TrouveurFunctions.count);
};

TrouveurPerformanceTest.prototype.testHighlightPerformanceUsingWikipediaPage = function() {
	jstestdriver.console.log('');
	jstestdriver.console.log('--- Trouveur.highlight ---');
	runnerPerformanceUsingWikipediaPage(TrouveurFunctions.highlight);
};