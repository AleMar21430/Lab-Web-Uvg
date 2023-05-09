import { Light_Groups, Caustics, Color_Operations } from './components.js'
import styles from './page.module.css'

export default function Home() {
	return (
		<body class={styles.body}>
			<ul class={styles.Header}>
				<img class={styles.Header_Logo} src='./Logo_Blender.png' />
				<a class={styles.Header_Link} href=''>Features</a>
				<a class={styles.Header_Link_Selected} href=''>Download</a>
				<a class={styles.Header_Link} href=''>Support</a>
				<a class={styles.Header_Link} href=''>Get Involved</a>
				<a class={styles.Header_Link} href=''>About</a>
				<a class={styles.Header_Link} href=''>Jobs</a>
				<a class={styles.Header_Link} href=''>Store</a>
				<a class={styles.Header_Button} href=''>♡ Donate</a>
			</ul>

			<ul class={styles.Sub_Header}>
				<a class={styles.Sub_Header_Link} href=''>Download</a>
				<a class={styles.Sub_Header_Link_Selected} href=''>Release Notes</a>
				<a class={styles.Sub_Header_Link} href=''>Long-term Support</a>
				<a class={styles.Sub_Header_Link} href=''>Requirements</a>
				<a class={styles.Sub_Header_Link} href=''>Demo Files</a>
				<a class={styles.Sub_Header_Link} href=''>Previous Versions</a>
				<a class={styles.Sub_Header_Link} href=''>Builds</a>
			</ul>

			<ul class={styles.Sub_Header_2}>
				<a class={styles.Sub_Header_Link} href=''>Release Notes</a>
				<a class={styles.Sub_Header_Link} href=''>3.5</a>
				<a class={styles.Sub_Header_Link} href=''>3.4</a>
				<a class={styles.Sub_Header_Link} href=''>3.3 LTS</a>
				<a class={styles.Sub_Header_Link_Selected} href=''>3.2</a>
				<a class={styles.Sub_Header_Link} href=''>3.1</a>
				<a class={styles.Sub_Header_Link} href=''>3.0</a>
				<a class={styles.Sub_Header_Link} href=''>2.93 LTS</a>
				<a class={styles.Sub_Header_Link} href=''>2.92</a>
				<a class={styles.Sub_Header_Link} href=''>2.91</a>
				<a class={styles.Sub_Header_Link} href=''>2.90</a>
				<a class={styles.Sub_Header_Link} href=''>2.83 LTS</a>
			</ul>

			<div class={styles.Reach_New_Lights_Img}>
				<p class={styles.Reach_New_Lights_H}>Reach new lights.</p>
				<a class={styles.Reach_New_Lights_B} href=''>Download Blender</a>
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
				<iframe class={styles.Whats_New_V} src='https://www.youtube.com/embed/TnX4_BcFY54'></iframe>
			</div>

			<div class={styles.Lightgroups_Img}>
				<p class={styles.Lightgroups_H}>LET THERE BE</p>
				<p class={styles.Lightgroups_H2}>LIGHT GROUPS</p>
				<p class={styles.Lightgroups_P}>A new type of Cycles render pass that contains only the lighting from a subset of light sources.</p>
			</div>

			<Light_Groups />

			<div class={styles.Lightgroups_D3}>
				<p class={styles.Lightgroups_P2}>All Light Groups combined in the Compositor.</p>
			</div>

			<pre class={styles.Spacer}>.        .        .</pre>

			<div class={styles.Caustics_D}>
				<Caustics />
				<div class={styles.Caustics_D2}>
					<p class={styles.Caustics_H}>SHADOW</p>
					<p class={styles.Caustics_H2}>CAUSTICS</p>
					<p class={styles.Caustics_P}>Cycles now supports selective rendering of caustics in shadows of refractive objects.</p>
					<br />
					<p class={styles.Caustics_P}>This is based on “Manifold Next Event Estimation”, a method developed for production rendering.</p>
					<br />
					<a class={styles.Caustics_A} href=''>Read More</a>
				</div>
			</div>

			<pre class={styles.Spacer}>.        .        .</pre>

			<div class={styles.Volume_D}>
				<p class={styles.Volume_H}>VOLUME</p>
				<p class={styles.Volume_H2}>MOTION BLUR</p>
				<p class={styles.Volume_P}>Introducing support for motion blur for gas simulations and imported OpenVDB volumes.</p>
				<br />
				<a class={styles.Volume_A} href=''>Read More</a>
				<video class={styles.Volume_V} muted loop autoPlay src='./cycles_volume.mp4' type='video/mp4'></video>
			</div>

			<div class={styles.Cycles_D}>
				<p class={styles.Cycles_P}>MORE CYCLES</p>
				<div class={styles.Cycles_D2}>
					<a class={styles.Cycles_A} href=''>Support Adaptive Sampling with Scrambling Distance</a>
					<a class={styles.Cycles_A} href=''>AMD GPU Rendering for Linux</a>
					<a class={styles.Cycles_A} href=''>OpenColorIO color space aliases support</a>
					<a class={styles.Cycles_A} href=''>New Linear ACEScg color space</a>
					<a class={styles.Cycles_A} href=''>Add Alpha Output to Object Info node</a>
					<a class={styles.Cycles_A} href=''>Support different Color Management for Render and Viewport</a>
					<a class={styles.Cycles_A} href=''>Automatically unpause viewport when switching to rendered mode</a>
					<a class={styles.Cycles_A} href=''>Enable Alembic procedural for final renders</a>
					<a class={styles.Cycles_A} href=''>Support for Baking to UDIM tiles</a>
				</div>
				<a class={styles.Cycles_B} href=''>See all Cycles changes</a>
			</div>

			<div class={styles.Color_D}>
				<p class={styles.Color_H}>COLOR ME IMPRESSED</p>
				<p class={styles.Color_P}>Blender 3.2 revolutionizes polygon painting with new tools, usability improvements, and unprecedented performance.</p>
				<video class={styles.Color_V} muted loop autoPlay src='./31-einar_performance_demo_s.mp4' type='video/mp4'></video>
			</div>

			<Color_Operations />

			<div class={styles.Card_D}>
				<div class={styles.Card_DL}>
					<p class={styles.Color_H2}>REMESH</p>
					<p class={styles.Card_P}>Now when using the voxel remesher all color attributes will be preserved.</p>
					<p class={styles.Card_P}>This is perfect to color your sculpts as you still experiment and block out the general shapes.</p>
					<br />
					<a class={styles.Volume_A} href=''>Read More</a>
				</div>
				<video class={styles.Card_V} muted loop autoPlay src='./21-remeshing_timelaspse_cut_s.mp4' type='video/mp4'></video>
			</div>

			<div class={styles.Card_D}>
				<video class={styles.Card_V} muted loop autoPlay src='./22-masking_timelaspse_cut_s.mp4' type='video/mp4'></video>
				<div class={styles.Card_DR}>
					<p class={styles.Color_H2}>MASK OUT</p>
					<p class={styles.Card_P}>Masking, auto-masking and face sets are fully supported with color attribute painting.</p>
				</div>
			</div>

			<div class={styles.Color_D}>
				<div class={styles.Card_D}>
					<img class={styles.Nodes_Img} src='./duplicate_elements_node.png' />
					<div class={styles.Nodes_D}>
						<p class={styles.Nodes_T}>GEOMETRY NODES</p>
						<p class={styles.Nodes_H1}>DUPLICATE</p>
						<p class={styles.Nodes_H2}>ELEMENTS</p>
						<p class={styles.Nodes_P}>This new node creates a new geometry with the specified elements (point, edge, face, spline, or instance).</p>
						<br />
						<p class={styles.Nodes_P}>
							Combined with the&nbsp;
							<a class={styles.Nodes_P} href=''>Geometry to Instance</a>
							&nbsp;Node, this can be used to create a basic efficient “Array” operation. This should be more efficient because the duplicates are instances.
						</p>
						<br />
						<br />
						<div class={styles.Nodes_D2}>
							<a class={styles.Nodes_A} href=''>See the Manual</a>
							<a class={styles.Nodes_A} href=''>See all Geometry Nodes changes</a>
						</div>
					</div>
				</div>
				<video class={styles.Nodes_V} muted loop autoPlay src='./geometry_nodes_duplicate_elements_s.mp4' type='video/mp4'></video>
				<div class={styles.Nodes_Tint}></div>
			</div>

			<div class={styles.Card_D2}>
				<video class={styles.Card_V2} muted loop autoPlay src='./asset_browser_collections_s.mp4' type='video/mp4'></video>
				<div class={styles.Card_DR}>
					<p class={styles.Card_T}>ASSET BROWSER</p>
					<p class={styles.Card_H1}>ASSET</p>
					<p class={styles.Card_H2}>COLLECTIONS</p>
					<p class={styles.Card_P}>Expand your asset library with Collections!</p>

					<li class={styles.Card_P}>Add Collection assets as instances or real objects.</li>
					<li class={styles.Card_P}>Thumbnails are automatically generated, or customize it with your own.</li>
					<br />
					<a class={styles.Volume_A} href=''>Read More</a>
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
				<video class={styles.Card_V} muted loop autoPlay src='./pentool_s.mp4' type='video/mp4'></video>
			</div>

			<div class={styles.Envelope_D}>
				<div class={styles.Card_D}>
					<video class={styles.Card_V} muted loop autoPlay src='./grease_pencil_envelope.mp4' type='video/mp4'></video>
					<div class={styles.Card_DR}>
						<p class={styles.Card_T}>GREASE PENCIL</p>
						<p class={styles.Card_H3}>ENVELOPE</p>
						<p class={styles.Card_H4}>MODIFIER</p>
						<p class={styles.Card_P}>This new modifier connects all points that are N points apart, a shape known as envelope.</p>
						<br />
						<a class={styles.Volume_A} href=''>See the Manual</a>
					</div>
				</div>
				<div class={styles.Envelope_D2}>
					<p class={styles.Envelope_P}>AND MORE</p>
					<div class={styles.Cycles_D2}>
						<a class={styles.Cycles_A} href=''>Build modifier improvements</a>
						<a class={styles.Cycles_A} href=''>Improved smooth operator algorithm</a>
						<a class={styles.Cycles_A} href=''>Scale Stroke Thickness in Pie menu</a>
						<a class={styles.Cycles_A} href=''>New “Keep Shape” option in Smooth modifier</a>
						<a class={styles.Cycles_A} href=''>Dot Dash modifier improvements</a>
						<a class={styles.Cycles_A} href=''>Improve multi-user Grease Pencil performance</a>
						<a class={styles.Cycles_A} href=''>Added cache to speed up object evaluation</a>
					</div>
					<a class={styles.Cycles_B} href=''>See all Grease Pencil changes</a>
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
				<img class={styles.Card_Img} src='./vse_channels.jpg' />
			</div>

			<div class={styles.Envelope_D2}>
				<p class={styles.VidSeq_P}>PLUS</p>
				<div class={styles.Cycles_D2}>
					<a class={styles.Cycles_A} href=''>Add frame selected operator for preview</a>
					<a class={styles.Cycles_A} href=''>Better handling of animation when transforming strips</a>
					<a class={styles.Cycles_A} href=''>Option to limit timeline view height</a>
					<a class={styles.Cycles_A} href=''>Use float for transformation offset</a>
					<a class={styles.Cycles_A} href=''>Enable edge panning for transform operator</a>
					<a class={styles.Cycles_A} href=''>Add filter method to strip transform</a>
					<a class={styles.Cycles_A} href=''>Create new scene from VSE</a>
				</div>
			</div>

			<pre class={styles.Spacer}>.        .        .</pre>

			<div class={styles.More_D2}>
				<p class={styles.More_H}>BUT WAIT, THERE’S MORE</p>
				<div class={styles.More_D3}>
					<div class={styles.More_D4}>
						<div class={styles.More_D}>
							<p class={styles.More_H2}>EEVEE</p>
							<li class={styles.More_Li}><a href=''>Displacement bump improvements</a></li>
							<li class={styles.More_Li}><a href=''>Shader improvements</a></li>
							<li class={styles.More_Li}><a href=''>Show compilation progress in the 3D Viewport</a></li>
							<li class={styles.More_Li}><a href=''>Bump node optimization</a></li>
							<li class={styles.More_Li}><a href=''>Tangent Vector displacement now matches Cycles</a></li>
						</div>
						<div class={styles.More_D}>
							<p class={styles.More_H2}>Library Override</p>
							<li class={styles.More_Li}><a href=''>ReSync up to 10x faster</a></li>
							<li class={styles.More_Li}><a href=''>General improvements</a></li>
							<li class={styles.More_Li}><a href=''>Proxy system deprecated</a></li>
						</div>
						<div class={styles.More_D}>
							<p class={styles.More_H2}>I/O</p>
							<li class={styles.More_Li}><a href=''>Support for WebP image format</a></li>
							<li class={styles.More_Li}><a href=''>New Experimental OBJ importer</a></li>
							<li class={styles.More_Li}><a href=''>FBX I/O improvements</a></li>
							<li class={styles.More_Li}><a href=''>BVH importing improvements</a></li>
						</div>
						<div class={styles.More_D}>
							<p>Viewport</p>
							<li class={styles.More_Li}><a href=''>Support maintaining ortho views when rolling +-90°</a></li>
						</div>
						<div class={styles.More_D}>
							<p class={styles.More_H2}>Geometry Nodes</p>
							<li class={styles.More_Li}><a href=''>Named Attributes</a></li>
							<li class={styles.More_Li}><a href=''>Readability Improvements</a></li>
							<li class={styles.More_Li}><a href=''>Face is Planar node</a></li>
							<li class={styles.More_Li}><a href=''>Better Preformance</a></li>
						</div>
						<div class={styles.More_D}>
							<p class={styles.More_H2}>Animation & Rigging</p>
							<li class={styles.More_Li}><a href=''>Motion Paths improvements</a></li>
							<li class={styles.More_Li}><a href=''>New “Keep Transform Without Inverse” parent option</a></li>
							<li class={styles.More_Li}><a href=''>Improvements to NLA editor</a></li>
							<li class={styles.More_Li}><a href=''>Support custom shortcuts for “Insert Keyframe” menu</a></li>
							<li class={styles.More_Li}><a href=''>Discontinuity (Euler) Filter available in Dope Sheet</a></li>
							<li class={styles.More_Li}><a href=''>Rigify improvements</a></li>
							<li class={styles.More_Li}><a href=''>Legacy Pose Library deprecated</a></li>
						</div>
					</div>
					<div class={styles.More_D4}>
						<div class={styles.More_D}>
							<p class={styles.More_H2}>Core</p>
							<li class={styles.More_Li}><a href=''>Improved error message when monitors are connected to multiple adapters</a></li>
							<li class={styles.More_Li}><a href=''>Faster Blender launch with disconnected shares</a></li>
							<li class={styles.More_Li}><a href=''>NDOF device improvements</a></li>
							<li class={styles.More_Li}><a href=''>Improved numerical entry when using Chinese language</a></li>
							<li class={styles.More_Li}><a href=''>Support for Woff and Woff2 font file formats</a></li>
						</div>
						<div class={styles.More_D}>
							<p class={styles.More_H2}>VR</p>
							<li class={styles.More_Li}><a href=''>Camera Landmark from Session</a></li>
							<li class={styles.More_Li}><a href=''>Object Visibility options</a></li>
							<li class={styles.More_Li}><a href=''>Support for HTC Vive Focus 3 controllers</a></li>
						</div>
						<div class={styles.More_D}>
							<p class={styles.More_H2}>User Interface</p>
							<li class={styles.More_Li}><a href=''>Swap Areas between separate windows</a></li>
							<li class={styles.More_Li}><a href=''>Snapping per editor</a></li>
							<li class={styles.More_Li}><a href=''>OneDrive shortcut in File Browser</a></li>
							<li class={styles.More_Li}><a href=''>Improved dragging of preview thumbnails</a></li>
							<li class={styles.More_Li}><a href=''>Voxel Size now displays units</a></li>
							<li class={styles.More_Li}><a href=''>Markers improvements</a></li>
							<li class={styles.More_Li}><a href=''>Better defaults in Voxel Remesh</a></li>
						</div>
						<div class={styles.More_D}>
							<p class={styles.More_H2}>Python</p>
							<li class={styles.More_Li}><a href=''>Context Temp Override</a></li>
							<li class={styles.More_Li}><a href=''>Display exceptions in Info Editor</a></li>
							<li class={styles.More_Li}><a href=''>Python API changes</a></li>
							<li class={styles.More_Li}><a href=''>API breaking changes and deprecation</a></li>
							<li class={styles.More_Li}><a href=''>Text Editor: Soft keywords syntax highlight</a></li>
						</div>
						<div class={styles.More_D}>
							<p class={styles.More_H2}>More</p>
							<li class={styles.More_Li}><a href=''>Compositor: Add Combine and Separate XYZ Nodes</a></li>
							<li class={styles.More_Li}><a href=''>Fixes in Motion Tracking</a></li>
							<li class={styles.More_Li}><a href=''>Libraries Updates</a></li>
						</div>
					</div>
				</div>
				<p class={styles.More_P}>Read the full list of changes at&nbsp;
					<a class={styles.More_P} href=''>wiki.blender.org</a>
				</p>
				<p class={styles.More_P}>A corrective release was published on August 3, 2022 See the list of fixes at&nbsp;
					<a class={styles.More_P} href=''>wiki.blender.org</a>
				</p>
			</div>

			<div class={styles.Artwork_D2}>
				<div class={styles.Card_DL}>
					<p class={styles.Card_H7}>GET THE ARTWORK</p>
					<p class={styles.Card_P}>Blender splash artwork source files are available for you to play with, not only for Blender 3.2 version but for&nbsp;
						<a class={styles.Card_P} href=''>previous versions as well.</a>
					</p>
					<br />
					<a class={styles.Cycles_B} href=''>Download .blend File</a>
				</div>
				<img class={styles.Artwork_Img} src='./oksana-dobrovolska-s.jpg' />
				<img class={styles.Card_Img} src='./oksana-dobrovolska-s.jpg' />
			</div>

			<div class={styles.More_D5}>
				<p class={styles.More_H}>Credits</p>
				<p class={styles.More_P}>
					<a class={styles.More_P} href=''>List of developers</a>
					&nbsp;that contributed to Blender 3.2
				</p>
				<p class={styles.More_P}>
					<a class={styles.More_P} href=''>Blender 3.2 splash</a>
					&nbsp;by&nbsp;
					<a class={styles.More_P} href=''>Oksana Dobrovolska.</a>
				</p>
				<p class={styles.More_P2}>
					Page design and layout by&nbsp;
					<a class={styles.More_P} href=''>Pablo Vazquez.</a>
					&nbsp;Features video by &nbsp;
					<a class={styles.More_P} href=''>SouthernShotty.</a>
					&nbsp;Barcelona Pavillion by&nbsp;
					<a class={styles.More_P} href=''>eMirage.</a>
					&nbsp;Sprite Fright by&nbsp;
					<a class={styles.More_P} href=''>Blender Studio.</a>
					&nbsp;Sculpt Paint demo by&nbsp;
					<a class={styles.More_P} href=''>Ramil Roosileht.</a>
					&nbsp;Remesh and Mask demo by&nbsp;
					<a class={styles.More_P} href=''>Daniel Bystedt.</a>
					&nbsp;Geometry Nodes by&nbsp;
					<a class={styles.More_P} href=''>Simon Thommes.</a>
					&nbsp;Asset Collection demo by&nbsp;
					<a class={styles.More_P} href=''>Flavio Della Tommasa.</a>
					&nbsp;Grease Pencil envelope modifier artwork by&nbsp;
					<a class={styles.More_P} href=''>Brain Graft.</a>
					&nbsp;Additional help by Blender Institute and the Blender community.
				</p>
				<p class={styles.More_P}>Huge thanks to everyone involved ♥</p>
			</div>

			<div class={styles.End_D}>
				<div class={styles.End_D2}>
					<p class={styles.More_P}>Blender is and will always remain free, forever.</p>
					<p class={styles.More_P}>Releases are possible thanks to the members of the Development Fund.</p>
					<p class={styles.More_P}>
						Join today and help to ensure the future of Blender for&nbsp;
						<a class={styles.More_P} href=''>$6/month</a>
					</p>
					<a class={styles.Volume_A} href=''>Join the Blender Development Fund ❤️</a>
				</div>
			</div>

			<footer class={styles.Footer}>
				<div class={styles.Footer_D}>
					<div class={styles.Footer_D2}>
						<a class={styles.Footer_A2} href=''>Download</a>
						<a class={styles.Footer_A} href=''>Latest Blender</a>
						<a class={styles.Footer_A} href=''>Blender LTS</a>
						<a class={styles.Footer_A} href=''>Blender</a>
						<a class={styles.Footer_A} href=''>Benchmark</a>
						<a class={styles.Footer_A} href=''>Previous Version</a>
						<a class={styles.Footer_A} href=''>Experimental</a>
						<a class={styles.Footer_A} href=''>Builds</a>
						<a class={styles.Footer_A} href=''>Source Code</a>
						<a class={styles.Footer_A} href=''>Release Notes</a>
						<a class={styles.Footer_A} href=''>Requirements</a>
						<a class={styles.Footer_A2} href=''>Organization</a>
						<a class={styles.Footer_A} href=''>People</a>
						<a class={styles.Footer_A} href=''>Jobs</a>
					</div>
					<div class={styles.Footer_D2}>
						<a class={styles.Footer_A2} href=''>About</a>
						<a class={styles.Footer_A} href=''>Blender</a>
						<a class={styles.Footer_A} href=''>Foundation</a>
						<a class={styles.Footer_A} href=''>Blender Institute</a>
						<a class={styles.Footer_A} href=''>Blender Studio</a>
						<a class={styles.Footer_A} href=''>License</a>
						<a class={styles.Footer_A} href=''>Logo & Trademark</a>
						<a class={styles.Footer_A} href=''>Credits</a>
						<a class={styles.Footer_A} href=''>Privacy Policy</a>
						<a class={styles.Footer_A2} href=''>Articles</a>
						<a class={styles.Footer_A} href=''>News</a>
						<a class={styles.Footer_A} href=''>Press Releases</a>
						<a class={styles.Footer_A} href=''>User Stories</a>
					</div>
					<div class={styles.Footer_D2}>
						<a class={styles.Footer_A2} href=''>Get Involved</a>
						<a class={styles.Footer_A} href=''>Dashboard</a>
						<a class={styles.Footer_A} href=''>Development</a>
						<a class={styles.Footer_A} href=''>Documentation</a>
						<a class={styles.Footer_A} href=''>Education</a>
						<a class={styles.Footer_A2} href=''>Donate</a>
						<a class={styles.Footer_A} href=''>Development Fund</a>
						<a class={styles.Footer_A} href=''>Education</a>
						<a class={styles.Footer_A} href=''>Donations</a>
						<a class={styles.Footer_A2} href=''>Blender Studio</a>
						<a class={styles.Footer_A} href=''>Films</a>
						<a class={styles.Footer_A} href=''>Training</a>
					</div>
					<div class={styles.Footer_D2}>
						<a class={styles.Footer_A2} href=''>Developers</a>
						<a class={styles.Footer_A} href=''>Get Started</a>
						<a class={styles.Footer_A} href=''>Projects</a>
						<a class={styles.Footer_A} href=''>Docs</a>
						<a class={styles.Footer_A} href=''>Blog</a>
						<a class={styles.Footer_A} href=''>Forum</a>
						<a class={styles.Footer_A} href=''>Python API</a>
						<a class={styles.Footer_A2} href=''>Support</a>
						<a class={styles.Footer_A} href=''>Manual</a>
						<a class={styles.Footer_A} href=''>Community</a>
						<a class={styles.Footer_A} href=''>FAQ</a>
						<a class={styles.Footer_A2} href=''>Blender Conference</a>
					</div>
					<div class={styles.Footer_D2}>
						<a class={styles.Footer_A2} href=''>Follow Blender</a>
						<a class={styles.Footer_A3} href=''>Youtube</a>
						<a class={styles.Footer_A3} href=''>Twitter</a>
						<a class={styles.Footer_A3} href=''>Instagram</a>
						<a class={styles.Footer_A3} href=''>Facebook</a>
						<a class={styles.Footer_A3} href=''>Likedin</a>
						<a class={styles.Footer_A3} href=''>Mastodon</a>
					</div>
				</div>
				<div>
					<p class={styles.More_P}>Artistic freedom starts with Blender ♡ The Free and Open Source 3D Creation Suite</p>
				</div>
			</footer>
		</body>
	)
}