"use client";

import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
    Environment,
    Float,
    MeshTransmissionMaterial,
    Lightformer,
} from "@react-three/drei";
import * as THREE from "three";

// Glass Cube Component
function GlassCube({
    position,
    scale = 1,
    color = "#00F0FF",
    rotationSpeed = 0.005,
}: {
    position: [number, number, number];
    scale?: number;
    color?: string;
    rotationSpeed?: number;
}) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += rotationSpeed;
            meshRef.current.rotation.y += rotationSpeed * 0.7;
            meshRef.current.rotation.z += rotationSpeed * 0.3;
        }
    });

    return (
        <Float
            speed={1.5}
            rotationIntensity={0.5}
            floatIntensity={0.5}
            floatingRange={[-0.3, 0.3]}
        >
            <mesh ref={meshRef} position={position} scale={scale}>
                <boxGeometry args={[1.5, 1.5, 1.5]} />
                <MeshTransmissionMaterial
                    backside
                    samples={4}
                    thickness={0.5}
                    chromaticAberration={0.15}
                    anisotropy={0.5}
                    distortion={0.5}
                    distortionScale={0.5}
                    temporalDistortion={0.1}
                    iridescence={1}
                    iridescenceIOR={1}
                    iridescenceThicknessRange={[0, 1400]}
                    color={color}
                    attenuationColor={color}
                    attenuationDistance={1}
                    roughness={0.1}
                    metalness={0.1}
                    transmission={0.95}
                    opacity={1}
                />
                <meshStandardMaterial
                    attach="material"
                    color={color}
                    emissive={color}
                    emissiveIntensity={0.2}
                    transparent
                    opacity={0.1}
                    wireframe
                />
            </mesh>
        </Float>
    );
}

// Neon Ring/Torus Component
function NeonRing({
    position,
    scale = 1,
    color = "#FF00FF",
}: {
    position: [number, number, number];
    scale?: number;
    color?: string;
}) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
        }
    });

    return (
        <Float
            speed={2}
            rotationIntensity={0.3}
            floatIntensity={0.3}
            floatingRange={[-0.2, 0.2]}
        >
            <mesh ref={meshRef} position={position} scale={scale}>
                <torusGeometry args={[1, 0.05, 16, 100]} />
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={2}
                    toneMapped={false}
                />
            </mesh>
        </Float>
    );
}

// Floating Sphere Component
function FloatingSphere({
    position,
    scale = 1,
    color = "#8B5CF6",
}: {
    position: [number, number, number];
    scale?: number;
    color?: string;
}) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            const time = state.clock.elapsedTime;
            meshRef.current.position.y = position[1] + Math.sin(time) * 0.2;
        }
    });

    return (
        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.4}>
            <mesh ref={meshRef} position={position} scale={scale}>
                <sphereGeometry args={[0.6, 32, 32]} />
                <meshPhysicalMaterial
                    color={color}
                    metalness={0.9}
                    roughness={0.1}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                    emissive={color}
                    emissiveIntensity={0.3}
                />
            </mesh>
        </Float>
    );
}

// Particle Field
function ParticleField() {
    const pointsRef = useRef<THREE.Points>(null);

    const particles = useMemo(() => {
        const count = 200;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            positions[i3] = (Math.random() - 0.5) * 20;
            positions[i3 + 1] = (Math.random() - 0.5) * 20;
            positions[i3 + 2] = (Math.random() - 0.5) * 10;

            // Mix of cyan and magenta
            const isCyan = Math.random() > 0.5;
            colors[i3] = isCyan ? 0 : 1;
            colors[i3 + 1] = isCyan ? 0.94 : 0;
            colors[i3 + 2] = isCyan ? 1 : 1;
        }

        return { positions, colors };
    }, []);

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
            pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[particles.positions, 3]}
                />
                <bufferAttribute
                    attach="attributes-color"
                    args={[particles.colors, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.03}
                vertexColors
                transparent
                opacity={0.8}
                sizeAttenuation
            />
        </points>
    );
}

// Main Scene
function Scene() {
    return (
        <>
            {/* Ambient Light */}
            <ambientLight intensity={0.2} />

            {/* Directional Light - Cyan */}
            <directionalLight
                position={[5, 5, 5]}
                intensity={1}
                color="#00F0FF"
            />

            {/* Point Light - Magenta */}
            <pointLight
                position={[-5, 3, -5]}
                intensity={0.8}
                color="#FF00FF"
                distance={20}
            />

            {/* Spot Light for drama */}
            <spotLight
                position={[0, 10, 0]}
                angle={0.5}
                penumbra={0.5}
                intensity={0.5}
                color="#ffffff"
            />

            {/* Floating Objects */}
            <GlassCube
                position={[3, 0, 0]}
                scale={1.2}
                color="#00F0FF"
                rotationSpeed={0.003}
            />
            <GlassCube
                position={[-3, 1, -2]}
                scale={0.8}
                color="#FF00FF"
                rotationSpeed={0.005}
            />

            {/* Neon Rings */}
            <NeonRing position={[2, 2, -1]} scale={0.8} color="#00F0FF" />
            <NeonRing position={[-2, -1, 1]} scale={0.6} color="#FF00FF" />
            <NeonRing position={[0, 3, -3]} scale={1} color="#8B5CF6" />

            {/* Floating Spheres */}
            <FloatingSphere position={[4, -2, -2]} scale={0.5} color="#00F0FF" />
            <FloatingSphere position={[-4, 2, 1]} scale={0.4} color="#FF00FF" />
            <FloatingSphere position={[0, -3, 0]} scale={0.6} color="#8B5CF6" />

            {/* Particle Field */}
            <ParticleField />

            {/* Environment lighting */}
            <Environment preset="city" />

            {/* Custom Lightformers for neon glow */}
            <Lightformer
                position={[5, 0, -5]}
                scale={5}
                color="#00F0FF"
                intensity={2}
                form="circle"
            />
            <Lightformer
                position={[-5, 0, -5]}
                scale={5}
                color="#FF00FF"
                intensity={2}
                form="circle"
            />
        </>
    );
}

// Main Component
export default function FloatingScene() {
    return (
        <div className="absolute inset-0 -z-10">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 50 }}
                dpr={[1, 2]}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: "high-performance",
                }}
            >
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>
            </Canvas>
        </div>
    );
}
