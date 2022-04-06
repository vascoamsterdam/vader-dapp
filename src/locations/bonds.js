import React from 'react'
import { Box, Flex, Text, Heading } from '@chakra-ui/react'
import { BondItem } from '../components/BondItem'
import defaults from '../common/defaults'

const Bonds = (props) => {

	return (
		<Box
			maxWidth={defaults.layout.container.md.width}
			m='0 auto'
			p={{ base: '5rem .4rem 0', md: '5rem 0 0' }}
			{...props}
		>
			<Flex
				flexDir='column'
				textAlign='center'
			>
				<Heading
					as='h1'
					size='md'
					fontSize={{ base: '1.10rem', md: '1.25rem' }}>VADER BONDS AVAILABLE.</Heading>
					The first step of Vader Protocol&apos;s long-term roadmap to awaken our sustainable Protocol-Owned Liquidity (POL) growth.<br/>
					Users can purchase discounted Vader by way of Vader Bonds, which are vested over a short duration, by supplying various LP units according to the protocol&apos;s growth needs.
			</Flex>
			<Flex
				m='0 auto'
				p='1.8rem'
				flexDir='row'
				height='auto'
				justifyContent='space-between'
			>
				<Text
					as='h4'
					fontSize='1.24rem'
					fontWeight='bolder'>
						Bonds
				</Text>
			</Flex>
			<Flex
				m='0 auto'
				p='1px'
				flexDir='column'
				height='auto'
				layerStyle='colorful'
				backgroundImage='linear-gradient(90deg,rgb(100, 71, 101) 0%,rgb(33, 74, 112) 100%)'
			>
				<Flex
					width='100%'
					layerStyle='colorful'
					background='#000000c4;'
					minH='430.4px'
					p='1.5rem 0 4.5rem'
					flexDir='column'
					justifyContent='center'
					position='relative'
				>
					<Box
						p={{ base: '0 0.5rem', md: '0 1.2rem' }}
						display='block'
						flexDir='column'
						justifyContent='center'
						textAlign='center'
						alignItems='center'
						minH='430.4px'
					>
						<Flex
							width='100%'
							alignItems='center'
							justifyContent='space-between'
							p='0 12px'
							minH='34.4px'
							mb={{ base: '0.7rem', md: '1rem' }}
						>
							<>
								<Flex>
									<Text
										as='h4'
										fontSize={{ base: '0.87rem', md: '1.1rem' }}
										fontWeight='bolder'>
											Assets
									</Text>
								</Flex>
								<Flex
									gridGap='38px'
								>
									<Flex>
										<Text
											as='h4'
											fontSize={{ base: '0.87rem', md: '1.1rem' }}
											fontWeight='bolder'>
											Price
										</Text>
									</Flex>
									<Flex>
										<Text
											as='h4'
											fontSize={{ base: '0.87rem', md: '1.1rem' }}
											fontWeight='bolder'>
											Discount
										</Text>
									</Flex>
								</Flex>
							</>
						</Flex>
						<style>
							{`
								@keyframes bgAnimation {
									0% { background: rgba(244, 155, 202, 0.08); }
									50% { background: #f44ca235; }
									100% { background: rgba(244, 155, 202, 0.08); }
								}
							`}
						</style>
						{defaults.bonds
							.slice(0)
							.reverse()
							.map((item, index) => {
								return (
									<BondItem
										key={index}
										bond={item}
									/>
								)
							})}
					</Box>
					<Flex
						flexDir='row'
						alignItems='center'
						justifyContent='center'
						minH='40px'
						position='absolute'
						left='50%'
						transform='translateX(-50%)'
						bottom='0'
						marginBottom='1.5rem'
					>
					</Flex>
				</Flex>
			</Flex>
		</Box>
	)
}

export default Bonds
