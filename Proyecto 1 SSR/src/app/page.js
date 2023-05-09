import {Light_Groups, Caustics, Color_Operations} from './components.js'
import styles from './page.module.css'

export default function Home() {
	return (
	<body class={styles.body}>
		<ul class={styles.Header}>
			<img class={styles.Header_Logo} src="./Logo_Blender.png"/>
			<a class={styles.Header_Link} href="https://www.blender.org/features/">Features</a>
			<a class={styles.Header_Link_Selected} href="https://www.blender.org/download/">Download</a>
			<a class={styles.Header_Link} href="https://www.blender.org/support/">Support</a>
			<a class={styles.Header_Link} href="https://www.blender.org/get-involved/">Get Involved</a>
			<a class={styles.Header_Link} href="https://www.blender.org/about/">About</a>
			<a class={styles.Header_Link} href="https://www.blender.org/jobs/">Jobs</a>
			<a class={styles.Header_Link} href="http://store.blender.org">Store</a>
			<a class={styles.Header_Button} href="https://fund.blender.org/">♡ Donate</a>
		</ul>

		<ul class={styles.Sub_Header}>
			<a class={styles.Sub_Header_Link} href="https://www.blender.org/download/">Download</a>
			<a class={styles.Sub_Header_Link_Selected} href="index.html">Release Notes</a>
			<a class={styles.Sub_Header_Link} href="https://www.blender.org/download/lts/">Long-term Support</a>
			<a class={styles.Sub_Header_Link} href="https://www.blender.org/download/requirements/">Requirements</a>
			<a class={styles.Sub_Header_Link} href="https://www.blender.org/download/demo-files/">Demo Files</a>
			<a class={styles.Sub_Header_Link} href="https://www.blender.org/download/previous-versions/">Previous Versions</a>
			<a class={styles.Sub_Header_Link} href="https://www.blender.org/download/builds/">Builds</a>
		</ul>

		<ul class={styles.Sub_Header_2}>
			<a class={styles.Sub_Header_Link} href="https://www.blender.org/download/">Release Notes</a>
			<a class={styles.Sub_Header_Link} href="index.html">3.5</a>
			<a class={styles.Sub_Header_Link} href="https://www.blender.org/download/releases/3-4/">3.4</a>
			<a class={styles.Sub_Header_Link} href="https://www.blender.org/download/releases/3-3/">3.3 LTS</a>
			<a class={styles.Sub_Header_Link_Selected} href="https://www.blender.org/download/releases/3-2/">3.2</a>
			<a class={styles.Sub_Header_Link} href="https://www.blender.org/download/releases/3-1/">3.1</a>
			<a class={styles.Sub_Header_Link} href="https://www.blender.org/download/releases/3-0/">3.0</a>
			<a class={styles.Sub_Header_Link} href="https://www.blender.org/download/releases/2-93/">2.93 LTS</a>
			<a class={styles.Sub_Header_Link} href="https://www.blender.org/download/releases/2-92/">2.92</a>
			<a class={styles.Sub_Header_Link} href="https://www.blender.org/download/releases/2-91/">2.91</a>
			<a class={styles.Sub_Header_Link} href="https://www.blender.org/download/releases/2-90/">2.90</a>
			<a class={styles.Sub_Header_Link} href="https://www.blender.org/download/releases/2-83/">2.83 LTS</a>
		</ul>

		<div class={styles.Reach_New_Lights_Img}>
			<p class={styles.Reach_New_Lights_H}>Reach new lights.</p>
			<a class={styles.Reach_New_Lights_B} href="https://www.blender.org/download/">Download Blender</a>
			<p class={styles.Reach_New_Lights_P}>Oksana Dobrovolska</p>
		</div>

		<div class={styles.Present_D}>
			<p class={styles.Present_H}>Blender Foundation and the online developers community are proud</p>
			<p class={styles.Present_H}>to present Blender 3.2. Unleash your creativity with new rendering</p>
			<p class={styles.Present_H}>features, painting tools, performance improvements and much more.</p>
			<p class={styles.Present_P}>Released June 8th, 2022</p>
		</div>

		<pre class={styles.Spacer}>.        .        .</pre>

		<div class={styles.Whats_New_D}>
			<p class={styles.Whats_New_P}>WHAT'S NEW IN 5 MINUTES</p>
			<iframe class={styles.Whats_New_V} src="https://www.youtube.com/embed/TnX4_BcFY54"></iframe>
		</div>

		<div class={styles.Lightgroups_Img}>
			<p class={styles.Lightgroups_H}>LET THERE BE</p>
			<p class={styles.Lightgroups_H2}>LIGHT GROUPS</p>
			<p class={styles.Lightgroups_P}>A new type of Cycles render pass that contains only the lighting from a subset of light sources.</p>
		</div>

		<Light_Groups/>

		<div class={styles.Lightgroups_D3}>
			<p class={styles.Lightgroups_P2}>All Light Groups combined in the Compositor.</p>
		</div>

		<pre class={styles.Spacer}>.        .        .</pre>

		<div class={styles.Caustics_D}>
			<Caustics/>
			<div class={styles.Caustics_D2}>
			<p class={styles.Caustics_H}>SHADOW</p>
			<p class={styles.Caustics_H2}>CAUSTICS</p>
			<p class={styles.Caustics_P}>Cycles now supports selective rendering of caustics in shadows of refractive objects.</p>
			<br/>
			<p class={styles.Caustics_P}>This is based on “Manifold Next Event Estimation”, a method developed for production rendering.</p>
			<br/>
			<a class={styles.Caustics_A} href="https://wiki.blender.org/wiki/Reference/Release_Notes/3.2/Cycles#Shadow_Caustics">Read More</a>
			</div>
		</div>

		<pre class={styles.Spacer}>.        .        .</pre>

		<div class={styles.Volume_D}>
			<p class={styles.Volume_H}>VOLUME</p>
			<p class={styles.Volume_H2}>MOTION BLUR</p>
			<p class={styles.Volume_P}>Introducing support for motion blur for gas simulations and imported OpenVDB volumes.</p>
			<br/>
			<a class={styles.Volume_A} href="https://wiki.blender.org/wiki/Reference/Release_Notes/3.2/Cycles#Volume_Motion_Blur">Read More</a>
			<video class={styles.Volume_V} muted loop autoPlay src="./cycles_volume.mp4" type="video/mp4"></video>
		</div>
		
		<div class={styles.Cycles_D}>
			<p class={styles.Cycles_P}>MORE CYCLES</p>
			<div class={styles.Cycles_D2}>
				<a class={styles.Cycles_A} href="http://developer.blender.org/rB630d2b6">Support Adaptive Sampling with Scrambling Distance</a>
				<a class={styles.Cycles_A} href="https://wiki.blender.org/wiki/Reference/Release_Notes/3.2/Cycles#AMD_GPU_Rendering">AMD GPU Rendering for Linux</a>
				<a class={styles.Cycles_A} href="http://developer.blender.org/rB5ac4e6c">OpenColorIO color space aliases support</a>
				<a class={styles.Cycles_A} href="http://developer.blender.org/rBf991f5a">New Linear ACEScg color space</a>
				<a class={styles.Cycles_A} href="http://developer.blender.org/rB5b4ab89">Add Alpha Output to Object Info node</a>
				<a class={styles.Cycles_A} href="https://wiki.blender.org/wiki/Reference/Release_Notes/3.2/Cycles#Color_Management">Support different Color Management for Render and Viewport</a>
				<a class={styles.Cycles_A} href="http://developer.blender.org/rBae217295578">Automatically unpause viewport when switching to rendered mode</a>
				<a class={styles.Cycles_A} href="http://developer.blender.org/rBe81d7bfcc9f4">Enable Alembic procedural for final renders</a>
				<a class={styles.Cycles_A} href="http://developer.blender.org/rB6787cc13d4ef">Support for Baking to UDIM tiles</a>
			</div>
			<a class={styles.Cycles_B} href="https://wiki.blender.org/wiki/Reference/Release_Notes/3.2/Cycles#Volume_Motion_Blur">See all Cycles changes</a>
		</div>

		<div class={styles.Color_D}>
			<p class={styles.Color_H}>COLOR ME IMPRESSED</p>
			<p class={styles.Color_P}>Blender 3.2 revolutionizes polygon painting with new tools, usability improvements, and unprecedented performance.</p>
			<video class={styles.Color_V} muted loop autoPlay src="./31-einar_performance_demo_s.mp4" type="video/mp4"></video>
		</div>

		<Color_Operations/>

		<div class={styles.Card_D}>
			<div class={styles.Card_DL}>
				<p class={styles.Color_H2}>REMESH</p>
				<p class={styles.Card_P}>Now when using the voxel remesher all color attributes will be preserved.</p>
				<p class={styles.Card_P}>This is perfect to color your sculpts as you still experiment and block out the general shapes.</p>
				<br/>
				<a class={styles.Volume_A} href="https://docs.blender.org/manual/en/3.2/sculpt_paint/sculpting/tool_settings/remesh.html">Read More</a>
			</div>
			<video class={styles.Card_V} muted loop autoPlay src="./21-remeshing_timelaspse_cut_s.mp4" type="video/mp4"></video>
		</div>

		<div class={styles.Card_D}>
			<video class={styles.Card_V} muted loop autoPlay src="./22-masking_timelaspse_cut_s.mp4" type="video/mp4"></video>
			<div class={styles.Card_DR}>
				<p class={styles.Color_H2}>MASK OUT</p>
				<p class={styles.Card_P}>Masking, auto-masking and face sets are fully supported with color attribute painting.</p>
			</div>
		</div>

		<div class={styles.Color_D}>
			<div class={styles.Card_D}>
				<img class={styles.Nodes_Img} src="./duplicate_elements_node.png"/>
				<div class={styles.Nodes_D}>
					<p class={styles.Nodes_T}>GEOMETRY NODES</p>
					<p class={styles.Nodes_H1}>DUPLICATE</p>
					<p class={styles.Nodes_H2}>ELEMENTS</p>
					<p class={styles.Nodes_P}>This new node creates a new geometry with the specified elements (point, edge, face, spline, or instance).</p>
					<br/>
					<p class={styles.Nodes_P}>
						Combined with the&nbsp;
						<a class={styles.Color_A} href="https://docs.blender.org/manual/en/3.2/modeling/geometry_nodes/geometry/geometry_to_instance.html">Geometry to Instance</a>
						&nbsp;Node, this can be used to create a basic efficient “Array” operation. This should be more efficient because the duplicates are instances.
					</p>
					<br/>
					<br/>
					<div class={styles.Nodes_D2}>
						<a class={styles.Nodes_A} href="https://docs.blender.org/manual/en/3.2/grease_pencil/modifiers/generate/envelope.html">See the Manual</a>
						<a class={styles.Nodes_A} href="https://docs.blender.org/manual/en/3.2/grease_pencil/modifiers/generate/envelope.html">See all Geometry Nodes changes</a>
					</div>
				</div>
			</div>
			<video class={styles.Nodes_V} muted loop autoPlay src="./geometry_nodes_duplicate_elements_s.mp4" type="video/mp4"></video>
		</div>

		<div class={styles.Card_D2}>
			<video class={styles.Card_V} muted loop autoPlay src="./asset_browser_collections_s.mp4" type="video/mp4"></video>
			<div class={styles.Card_DR}>
				<p class={styles.Card_T}>ASSET BROWSER</p>
				<p class={styles.Card_H1}>ASSET</p>
				<p class={styles.Card_H2}>COLLECTIONS</p>
				<p class={styles.Card_P}>Expand your asset library with Collections!</p>

				<li class={styles.Card_P}>Add Collection assets as instances or real objects.</li>
				<li class={styles.Card_P}>Thumbnails are automatically generated, or customize it with your own.</li>
				<br/>
				<a class={styles.Volume_A} href="https://developer.blender.org/rB253e4e7ed22b">Read More</a>
			</div>
		</div>

		<pre class={styles.Spacer}>.        .        .</pre>

		<div class={styles.Card_D}>
			<div class={styles.Card_DL}>
				<p class={styles.Card_T}>MODELING</p>
				<p class={styles.Card_H3}>CURVE</p>
				<p class={styles.Card_H4}>PEN TOOL</p>
				<p class={styles.Card_P}>Quickly add, delete, and tweak control points. Hold modifier keys to switch handle types.</p>
			</div>
			<video class={styles.Card_V} muted loop autoPlay src="./pentool_s.mp4" type="video/mp4"></video>
		</div>

		<div class={styles.Envelope_D}>
			<div class={styles.Card_D}>
				<video class={styles.Card_V} muted loop autoPlay src="./grease_pencil_envelope.mp4" type="video/mp4"></video>
				<div class={styles.Card_DR}>	
					<p class={styles.Card_T}>GREASE PENCIL</p>
					<p class={styles.Card_H3}>ENVELOPE</p>
					<p class={styles.Card_H4}>MODIFIER</p>
					<p class={styles.Card_P}>This new modifier connects all points that are N points apart, a shape known as envelope.</p>
					<br/>
					<a class={styles.Volume_A} href="https://docs.blender.org/manual/en/3.2/grease_pencil/modifiers/generate/envelope.html">See the Manual</a>
				</div>
			</div>
			<div class={styles.Envelope_D2}>
				<p class={styles.Envelope_P}>AND MORE</p>
				<div class={styles.Cycles_D2}>
					<a class={styles.Cycles_A} href="https://wiki.blender.org/wiki/Reference/Release_Notes/3.2/Grease_Pencil#Modifiers_and_VFX">Build modifier improvements</a>
					<a class={styles.Cycles_A} href="http://developer.blender.org/rBd4e1458db3a0">Improved smooth operator algorithm</a>
					<a class={styles.Cycles_A} href="http://developer.blender.org/rBacd7a648b17a">Scale Stroke Thickness in Pie menu</a>
					<a class={styles.Cycles_A} href="http://developer.blender.org/rBd4e1458db3a0">New “Keep Shape” option in Smooth modifier</a>
					<a class={styles.Cycles_A} href="https://wiki.blender.org/wiki/Reference/Release_Notes/3.2/Grease_Pencil#Modifiers_and_VFX">Dot Dash modifier improvements</a>
					<a class={styles.Cycles_A} href="http://developer.blender.org/rB7ca13eef7c33">Improve multi-user Grease Pencil performance</a>
					<a class={styles.Cycles_A} href="http://developer.blender.org/rBe2befa425a84">Added cache to speed up object evaluation</a>
				</div>
				<a class={styles.Cycles_B} href="https://wiki.blender.org/wiki/Reference/Release_Notes/3.2/Grease_Pencil">See all Grease Pencil changes</a>
			</div>
		</div>

		<div class={styles.Card_D}>
			<div class={styles.Card_DL}>
				<p class={styles.Card_T}>VIDEO SEQUENCER</p>
				<p class={styles.Card_H5}>ENHANCED</p>
				<p class={styles.Card_H6}>CHANNELS</p>
				<p class={styles.Card_P}>Organize your edits by giving channels a name!</p>
				<p class={styles.Card_P}>You can also mute and lock entire channels.</p>
			</div>
			<img class={styles.Card_Img} src="./vse_channels.jpg"/>
		</div>

		<div class={styles.Envelope_D2}>
			<p class={styles.VidSeq_P}>PLUS</p>
			<div class={styles.Cycles_D2}>
				<a class={styles.Cycles_A} href="http://developer.blender.org/rBe16ff4132e35">Add frame selected operator for preview</a>
				<a class={styles.Cycles_A} href="http://developer.blender.org/rB32da64c17e9d">Better handling of animation when transforming strips</a>
				<a class={styles.Cycles_A} href="http://developer.blender.org/rB17769489d920">Option to limit timeline view height</a>
				<a class={styles.Cycles_A} href="http://developer.blender.org/rBb4700a13c6ab">Use float for transformation offset</a>
				<a class={styles.Cycles_A} href="http://developer.blender.org/rBe49fef45cef7">Enable edge panning for transform operator</a>
				<a class={styles.Cycles_A} href="http://developer.blender.org/rB1c5f2e49b7bf">Add filter method to strip transform</a>
				<a class={styles.Cycles_A} href="http://developer.blender.org/rB2d24ba0210e3">Create new scene from VSE</a>
			</div>
		</div>

		<pre class={styles.Spacer}>.        .        .</pre>

		<div>
			<p>BUT WAIT, THERE’S MORE</p>
			<div>
				<div>
					<p>EEVEE</p>
					<li>Displacement bump improvements</li>
					<li>Shader improvements</li>
					<li>Show compilation progress in the 3D Viewport</li>
					<li>Bump node optimization</li>
					<li>Tangent Vector displacement now matches Cycles</li>
				</div>
				<div>
					<p>EEVEE</p>
					<li>Displacement bump improvements</li>
				</div>
				<div>
					<p>EEVEE</p>
					<li>Displacement bump improvements</li>
				</div>
				<div>
					<p>EEVEE</p>
					<li>Displacement bump improvements</li>
				</div>
				<div>
					<p>EEVEE</p>
					<li>Displacement bump improvements</li>
				</div>
				<div>
					<p>EEVEE</p>
					<li>Displacement bump improvements</li>
				</div>
			</div>
			<div>
				<div>
					<p>EEVEE</p>
					<li>Displacement bump improvements</li>
				</div>
				<div>
					<p>EEVEE</p>
					<li>Displacement bump improvements</li>
				</div>
				<div>
					<p>EEVEE</p>
					<li>Displacement bump improvements</li>
				</div>
				<div>
					<p>EEVEE</p>
					<li>Displacement bump improvements</li>
				</div>
				<div>
					<p>EEVEE</p>
					<li>Displacement bump improvements</li>
				</div>
			</div>
			<p>Read the full list of changes at&nbsp;
				<a>wiki.blender.org</a>
			</p>
			<p>A corrective release was published on August 3, 2022 See the list of fixes at&nbsp;
				<a>wiki.blender.org</a>
			</p>
		</div>

		<div class={styles.Artwork_Img}>
			<div class={styles.Card_DL}>
				<p class={styles.Card_H7}>GET THE ARTWORK</p>
				<p class={styles.Card_P}>Blender splash artwork source files are available for you to play with, not only for Blender 3.2 version but for&nbsp;
					<a>previous versions as well.</a>
				</p>
				<br/>
				<a class={styles.Cycles_B} href="https://docs.blender.org/manual/en/3.2/sculpt_paint/sculpting/tool_settings/remesh.html">Download .blend File</a>
			</div>
			<img class={styles.Card_Img} src="./oksana-dobrovolska-s.jpg"/>
		</div>

		<div>
			<p>Credits</p>
			<p>
				<a>List of developers</a>
				&nbsp;that contributed to Blender 3.2
			</p>
			<p>
				<a>Blender 3.2 splash</a>
				&nbsp;by&nbsp;
				<a>Oksana Dobrovolska.</a>
			</p>
			<p>
				Page design and layout by&nbsp;
				<a>Pablo Vazquez.</a>
				&nbsp;Features video by &nbsp;
				<a>SouthernShotty.</a>
				&nbsp;Barcelona Pavillion by&nbsp;
				<a>eMirage.</a>
				&nbsp;Sprite Fright by&nbsp;
				<a>Blender Studio.</a>
				&nbsp;Sculpt Paint demo by&nbsp;
				<a>Ramil Roosileht.</a>
				&nbsp;Remesh and Mask demo by&nbsp;
				<a>Daniel Bystedt.</a>
				&nbsp;Geometry Nodes by&nbsp;
				<a>Simon Thommes.</a>
				&nbsp;Asset Collection demo by&nbsp;
				<a>Flavio Della Tommasa.</a>
				&nbsp;Grease Pencil envelope modifier artwork by&nbsp;
				<a>Brain Graft.</a>
				&nbsp;Additional help by Blender Institute and the Blender community.
			</p>
			<p>Huge thanks to everyone involved ♥</p>
		</div>

		<div>
			<p>Blender is and will always remain free, forever.</p>
			<p>Releases are possible thanks to the members of the Development Fund.</p>
			<p>
				Join today and help to ensure the future of Blender for&nbsp;
				<a>$6/month</a>
			</p>
			<a class={styles.Volume_A} href="https://docs.blender.org/manual/en/3.2/sculpt_paint/sculpting/tool_settings/remesh.html">Join the Blender Development Fund</a>
		</div>

		<footer class={styles.Footer}>
			<div class={styles.Footer_D}>
				<div class={styles.Footer_D2}>
					<a class={styles.Footer_A2}>Download</a>
					<a class={styles.Footer_A}>Latest Blender</a>
					<a class={styles.Footer_A}>Blender LTS</a>
					<a class={styles.Footer_A}>Blender</a>
					<a class={styles.Footer_A}>Benchmark</a>
					<a class={styles.Footer_A}>Previous Version</a>
					<a class={styles.Footer_A}>Experimental</a>
					<a class={styles.Footer_A}>Builds</a>
					<a class={styles.Footer_A}>Source Code</a>
					<a class={styles.Footer_A}>Release Notes</a>
					<a class={styles.Footer_A}>Requirements</a>
					<a class={styles.Footer_A2}>Organization</a>
					<a class={styles.Footer_A}>People</a>
					<a class={styles.Footer_A}>Jobs</a>
				</div>
				<div class={styles.Footer_D2}>
					<a class={styles.Footer_A2}>About</a>
					<a class={styles.Footer_A}>Blender</a>
					<a class={styles.Footer_A}>Foundation</a>
					<a class={styles.Footer_A}>Blender Institute</a>
					<a class={styles.Footer_A}>Blender Studio</a>
					<a class={styles.Footer_A}>License</a>
					<a class={styles.Footer_A}>Logo & Trademark</a>
					<a class={styles.Footer_A}>Credits</a>
					<a class={styles.Footer_A}>Privacy Policy</a>
					<a class={styles.Footer_A2}>Articles</a>
					<a class={styles.Footer_A}>News</a>
					<a class={styles.Footer_A}>Press Releases</a>
					<a class={styles.Footer_A}>User Stories</a>
				</div>
				<div class={styles.Footer_D2}>
					<a class={styles.Footer_A2}>Get Involved</a>
					<a class={styles.Footer_A}>Dashboard</a>
					<a class={styles.Footer_A}>Development</a>
					<a class={styles.Footer_A}>Documentation</a>
					<a class={styles.Footer_A}>Education</a>
					<a class={styles.Footer_A2}>Donate</a>
					<a class={styles.Footer_A}>Development Fund</a>
					<a class={styles.Footer_A}>Education</a>
					<a class={styles.Footer_A}>Donations</a>
					<a class={styles.Footer_A2}>Blender Studio</a>
					<a class={styles.Footer_A}>Films</a>
					<a class={styles.Footer_A}>Training</a>
				</div>
				<div class={styles.Footer_D2}>
					<a class={styles.Footer_A2}>Developers</a>
					<a class={styles.Footer_A}>Get Started</a>
					<a class={styles.Footer_A}>Projects</a>
					<a class={styles.Footer_A}>Docs</a>
					<a class={styles.Footer_A}>Blog</a>
					<a class={styles.Footer_A}>Forum</a>
					<a class={styles.Footer_A}>Python API</a>
					<a class={styles.Footer_A2}>Support</a>
					<a class={styles.Footer_A}>Manual</a>
					<a class={styles.Footer_A}>Community</a>
					<a class={styles.Footer_A}>FAQ</a>
					<a class={styles.Footer_A2}>Blender Conference</a>
				</div>
				<div class={styles.Footer_D2}>
					<a class={styles.Footer_A2}>Follow Blender</a>
					<a>Youtube</a>
					<a>Twitter</a>
					<a>Instagram</a>
					<a>Facebook</a>
					<a>Likedin</a>
					<a>Mastodon</a>
				</div>
			</div>
			<div>
				<p>Artistic freedom starts with Blender  The Free and Open Source 3D Creation Suite</p>
			</div>
		</footer>
	</body>
	)
}